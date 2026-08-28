"use client";

import { useState } from "react";

import { Plus, Clock } from "lucide-react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { createService } from "@/app/(dashboardGroup)/technician-dashboard/_actions/createService";

export default function TechnicianServices({
  initialServices,
  categories,
}: {
  initialServices: any[];
  categories: any[];
}) {
  const [services, setServices] = useState(initialServices);

  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    title: "",

    description: "",

    price: "",

    duration: "",

    categoryId: "",
  });

  const handleChange = (key: string, value: string) => {
    setForm((previous) => ({
      ...previous,

      [key]: value,
    }));
  };

  const handleCreate = async () => {
    if (!form.categoryId) {
      toast.error("Please select category");

      return;
    }

    try {
      setLoading(true);

      const result = await createService({
        title: form.title,

        description: form.description,

        price: Number(form.price),

        duration: Number(form.duration),

        categoryId: form.categoryId,
      });

      setServices((previous) => [...previous, result.data]);

      toast.success("Service created successfully");

      setOpen(false);

      setForm({
        title: "",

        description: "",

        price: "",

        duration: "",

        categoryId: "",
      });
    } catch (error: any) {
      toast.error(error.message || "Failed to create service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">My Services</h1>

          <p className="text-muted-foreground">Manage your created services</p>
        </div>

        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 size-4" />
          Add Service
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create Service</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <Input
              placeholder="Service title"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
            />

            <Textarea
              placeholder="Description"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
            />

            <Input
              type="number"
              placeholder="Price"
              value={form.price}
              onChange={(e) => handleChange("price", e.target.value)}
            />

            <Input
              type="number"
              placeholder="Duration (minutes)"
              value={form.duration}
              onChange={(e) => handleChange("duration", e.target.value)}
            />

            {/* Category Select */}

            <Select
              value={form.categoryId}
              onValueChange={(value) => handleChange("categoryId", value!)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>

              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              className="w-full"
              disabled={loading}
              onClick={handleCreate}
            >
              {loading ? "Creating..." : "Create Service"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Card>
        <CardContent className="p-6">
          {services.length === 0 ? (
            <div className="text-center text-muted-foreground">
              No services created
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.id}>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>

                    <div className="flex justify-between">
                      <span>৳{service.price}</span>

                      <span className="flex items-center gap-1">
                        <Clock className="size-4" />
                        {service.duration} min
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground">
                      Category:
                      {service.category?.name ||
                        categories.find((c) => c.id === service.categoryId)
                          ?.name ||
                        "N/A"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
