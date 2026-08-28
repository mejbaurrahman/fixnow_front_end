"use client";

import { useEffect, useState } from "react";
import { CalendarDays, Clock } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { getAvailability } from "@/app/(publicGroup)/_actions/bookingActions";
import { updateAvailability } from "@/app/(dashboardGroup)/technician-dashboard/_actions/updateAvailability";

const availableSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

type Slot = {
  time: string;
  isBooked: boolean;
};

export default function AvailabilityPage({
  technicianId,
}: {
  technicianId: string;
}) {
  const [date, setDate] = useState<Date>();

  const [slots, setSlots] = useState<Slot[]>([]);

  const [existingSlots, setExistingSlots] = useState<Slot[]>([]);

  const [selectedSlots, setSelectedSlots] = useState<string[]>([]);

  const [slotLoading, setSlotLoading] = useState(false);

  const [saving, setSaving] = useState(false);

  const formatDate = (date: Date) => {
    return date.toISOString();
  };

  // Remove already created slots

  const remainingSlots = availableSlots.filter(
    (slot) => !existingSlots.some((item) => item.time === slot),
  );

  // Load availability by date

  useEffect(() => {
    if (!date) {
      setSlots([]);

      setSelectedSlots([]);

      return;
    }

    const loadAvailability = async () => {
      try {
        setSlotLoading(true);

        const result = await getAvailability(
          technicianId,

          formatDate(date),
        );

        const existingSlots = result?.data?.slots || [];

        setSlots(existingSlots);

        setExistingSlots(existingSlots);

        // New selection should be empty
        setSelectedSlots([]);
      } catch (error: any) {
        toast.error(error.message || "Failed to load availability");

        setSlots([]);

        setSelectedSlots([]);
      } finally {
        setSlotLoading(false);
      }
    };

    loadAvailability();
  }, [date, technicianId]);

  const toggleSlot = (slot: string) => {
    setSelectedSlots((previous) => {
      if (previous.includes(slot)) {
        return previous.filter((item) => item !== slot);
      }

      return [...previous, slot];
    });
  };

  const handleSave = async () => {
    if (!date) {
      toast.error("Please select date");

      return;
    }

    if (selectedSlots.length === 0) {
      toast.error("Please select slots");

      return;
    }

    const payload = {
      date: date.toISOString().split("T")[0],

      slots: selectedSlots,
    };

    try {
      setSaving(true);

      //   await updateAvailability(payload);

      //   toast.success("Availability saved successfully");
      await updateAvailability(payload);

      // Add newly created slots into existing availability

      const newSlots: Slot[] = selectedSlots.map((slot) => ({
        time: slot,
        isBooked: false,
      }));

      // Update existing slots UI

      setSlots((previous) => [...previous, ...newSlots]);

      setExistingSlots((previous) => [...previous, ...newSlots]);

      // Clear checkbox selection

      setSelectedSlots([]);

      toast.success("Availability saved successfully");
    } catch (error: any) {
      toast.error(error.message || "Failed to save availability");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-8">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Availability</h1>

        <p className="mt-2 text-muted-foreground">
          Manage your working days and available slots.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
        {/* Date */}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="size-5 text-primary" />
              Select Date
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(selectedDate) => {
                if (!selectedDate) return;

                selectedDate.setHours(12);

                setDate(selectedDate);
              }}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        {/* Slots */}

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="size-5 text-primary" />
              Available Slots
            </CardTitle>
          </CardHeader>

          <CardContent>
            {!date ? (
              <div className="rounded-xl border border-dashed p-10 text-center text-muted-foreground">
                Select a date first.
              </div>
            ) : slotLoading ? (
              <div className="rounded-xl border p-10 text-center">
                Loading slots...
              </div>
            ) : (
              <div className="space-y-6">
                {/* Existing Slots */}

                {slots.length > 0 && (
                  <div className="rounded-xl border bg-muted/30 p-4">
                    <h3 className="mb-3 font-semibold">
                      Existing Availability
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {slots.map((slot) => (
                        <div
                          key={slot.time}
                          className={`
                                rounded-lg px-3 py-2 text-sm
                                ${
                                  slot.isBooked
                                    ? "bg-red-100 text-red-700"
                                    : "bg-green-100 text-green-700"
                                }
                              `}
                        >
                          {slot.time}

                          {slot.isBooked && (
                            <span className="ml-1 text-xs">(Booked)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* New Slots */}

                <div>
                  <h3 className="mb-3 font-semibold">Add More Slots</h3>

                  {remainingSlots.length === 0 ? (
                    <div className="rounded-xl border border-dashed p-6 text-center text-muted-foreground">
                      No more slots available
                    </div>
                  ) : (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {remainingSlots.map((slot) => (
                        <div
                          key={slot}
                          className={`
                                flex items-center gap-3
                                rounded-xl border p-4
                                transition
                                ${
                                  selectedSlots.includes(slot)
                                    ? "border-primary bg-primary/10"
                                    : "hover:bg-muted"
                                }
                              `}
                        >
                          <Checkbox
                            id={slot}
                            checked={selectedSlots.includes(slot)}
                            onCheckedChange={() => toggleSlot(slot)}
                          />

                          <Label
                            htmlFor={slot}
                            className="cursor-pointer font-medium"
                          >
                            {slot}
                          </Label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button
                  className="w-full"
                  onClick={handleSave}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Availability"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
