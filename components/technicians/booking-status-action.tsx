"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateBookingStatus } from "@/app/(dashboardGroup)/technician-dashboard/_actions/getBookingsByTechnician";

const nextStatusMap: Record<string, string[]> = {
  REQUESTED: ["ACCEPTED", "DECLINED"],

  ACCEPTED: [],

  PAID: ["IN_PROGRESS"],

  IN_PROGRESS: ["COMPLETED"],

  COMPLETED: [],

  DECLINED: [],

  CANCELLED: [],
};

export function BookingStatusAction({
  bookingId,
  status,
}: {
  bookingId: string;

  status: string;
}) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  // const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const [pending, startTransition] = useTransition();

  const availableStatus = nextStatusMap[status] || [];

  const handleUpdate = () => {
    if (!selectedStatus) {
      toast.error("Please select status");

      return;
    }

    startTransition(async () => {
      try {
        await updateBookingStatus(bookingId, selectedStatus);

        toast.success("Booking status updated");

        setOpen(false);

        setSelectedStatus("");

        router.refresh();
      } catch (error: any) {
        toast.error(error.message || "Failed to update status");
      }
    });
  };

  if (availableStatus.length === 0) {
    return <span className="text-sm text-muted-foreground">No action</span>;
  }

  return (
    <>
      <Button size="sm" onClick={() => setOpen(true)}>
        Update Status
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update Booking Status</DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                Current Status:
                <span className="ml-2 font-semibold text-foreground">
                  {status}
                </span>
              </p>

              <Select
                value={selectedStatus}
                onValueChange={(value) => setSelectedStatus(value ?? "")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select next status" />
                </SelectTrigger>

                <SelectContent>
                  {availableStatus.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              className="w-full"
              disabled={pending}
              onClick={handleUpdate}
            >
              {pending ? "Updating..." : "Confirm Update"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
