"use client";

import { useState } from "react";

import { toast } from "sonner";

import { Plus } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { createCategory } from "@/app/(dashboardGroup)/_actions/createCategory";
import { useRouter } from "next/navigation";

export function CreateCategoryDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");

  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await createCategory({
        name,

        description,
      });

      toast.success("Category created successfully");

      setName("");

      setDescription("");

      setOpen(false);
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus className="mr-2 size-4" />
        Add Category
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Category</DialogTitle>
          </DialogHeader>

          <div className="space-y-5">
            <Input
              placeholder="Category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <Textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <Button
              className="w-full"
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? "Creating..." : "Create Category"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
