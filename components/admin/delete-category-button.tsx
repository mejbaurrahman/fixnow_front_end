"use client";

import { useState, useTransition } from "react";
import { Trash } from "lucide-react";
import { toast } from "sonner";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/app/(dashboardGroup)/_actions/createCategory";
import { useRouter } from "next/navigation";

export function DeleteCategoryButton({
  categoryId,
  categoryName,
}: {
  categoryId: string;
  categoryName: string;
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [pending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteCategory(categoryId);

        toast.success(`${categoryName} deleted successfully`);

        setOpen(false);
        router.refresh();
      } catch (error: any) {
        toast.error(error.message || "Delete failed");
      }
    });
  };

  return (
    <>
      {/* Delete Button */}

      <Button size="icon" variant="destructive" onClick={() => setOpen(true)}>
        <Trash className="size-4" />
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Category?</AlertDialogTitle>

            <AlertDialogDescription>
              Are you sure you want to delete{" "}
              <span className="font-semibold text-foreground">
                {categoryName}
              </span>
              ? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>

            <AlertDialogAction
              disabled={pending}
              onClick={handleDelete}
              className="
                bg-destructive
                text-destructive-foreground
                hover:bg-destructive/90
              "
            >
              {pending ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
