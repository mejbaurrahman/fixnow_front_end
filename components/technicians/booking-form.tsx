"use client";

import { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const slots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "05:00 PM",
];

export function BookingForm({ technicianId }: { technicianId: string }) {
  const [date, setDate] = useState<Date>();
  const [selectedSlot, setSelectedSlot] = useState<string>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book this technician</CardTitle>

        <CardDescription>
          Select a date and available time slot.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" />

            <h3 className="text-sm font-semibold">Select date</h3>
          </div>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={{
              before: new Date(),
            }}
            className="rounded-md border"
          />
        </div>

        <Separator />

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Clock className="size-4 text-primary" />

            <h3 className="text-sm font-semibold">Available time</h3>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {slots.map((slot) => (
              <Button
                key={slot}
                type="button"
                size="sm"
                variant={selectedSlot === slot ? "default" : "outline"}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot}
              </Button>
            ))}
          </div>
        </div>

        <Button className="w-full" size="lg" disabled={!date || !selectedSlot}>
          Request Booking
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          You won't be charged until the technician accepts your request.
        </p>
      </CardContent>
    </Card>
  );
}
