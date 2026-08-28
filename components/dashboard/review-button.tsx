"use client";

import { useState } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { createReview } from "@/app/(dashboardGroup)/_actions/createReview";

export default function ReviewButton({ bookingId }: { bookingId: string }) {
  const [open, setOpen] = useState(false);

  const [rating, setRating] = useState<number>(5);

  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!comment.trim()) {
      toast.error("Please write a comment");

      return;
    }

    try {
      setLoading(true);

      await createReview({
        bookingId,

        rating,

        comment,
      });

      toast.success("Review submitted successfully");

      setOpen(false);

      setComment("");

      setRating(5);
    } catch (error: any) {
      toast.error(error.message || "Failed to submit review");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button size="sm" variant="outline" onClick={() => setOpen(true)}>
        Review
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Give Review</DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium">Rating</label>

              <Select
                value={String(rating)}
                onValueChange={(value) => {
                  setRating(Number(value));
                }}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <SelectItem key={item} value={String(item)}>
                      {item} ⭐
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium">Comment</label>

              <Textarea
                rows={5}
                placeholder="Write your experience..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <Button
              className="w-full"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
