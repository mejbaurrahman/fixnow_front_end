"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { updateUserStatus } from "@/app/(dashboardGroup)/_actions/getUsers";

export function BanUserButton({
  userId,
  userName,
  status,
}: {
  userId: string;
  userName: string;
  status: "BAN" | "UNBAN";
}) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const [pending, startTransition] = useTransition();

  const isBanned = status === "BAN";

  const handleStatusChange = () => {
    startTransition(async () => {
      try {
        await updateUserStatus(userId, isBanned ? "UNBAN" : "BAN");

        toast.success(
          isBanned
            ? `${userName} has been unbanned`
            : `${userName} has been banned`,
        );

        setOpen(false);

        router.refresh();
      } catch (error: any) {
        toast.error(error.message || "Something went wrong");
      }
    });
  };

  return (
    <>
      <Button
        size="sm"
        variant={isBanned ? "default" : "destructive"}
        onClick={() => setOpen(true)}
      >
        {isBanned ? "Unban User" : "Ban User"}
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {isBanned ? "Unban User?" : "Ban User?"}
            </AlertDialogTitle>

            <AlertDialogDescription>
              Are you sure you want to {isBanned ? "unban" : "ban"}{" "}
              <span className="font-semibold text-foreground">{userName}</span>?
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              disabled={pending}
              onClick={handleStatusChange}
              className={
                !isBanned
                  ? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  : ""
              }
            >
              {pending
                ? "Processing..."
                : isBanned
                  ? "Confirm Unban"
                  : "Confirm Ban"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
