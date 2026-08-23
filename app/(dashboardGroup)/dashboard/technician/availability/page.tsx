"use client";

import { useState } from "react";
import { CalendarDays, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const defaultSlots = [
  "09:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "02:00 PM - 03:00 PM",
  "03:00 PM - 04:00 PM",
  "05:00 PM - 06:00 PM",
];

export default function AvailabilityPage() {
  const [date, setDate] = useState<Date>();
  const [available, setAvailable] = useState(true);

  return (
    <div className="p-4 md:p-8">
      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Availability</h1>

        <p className="mt-2 text-muted-foreground">
          Set your working days and available time slots.
        </p>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarDays className="size-5 text-primary" />
              Select a date
            </CardTitle>
          </CardHeader>

          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Clock className="size-5 text-primary" />
                Time slots
              </span>

              <div className="flex items-center gap-2">
                <Switch checked={available} onCheckedChange={setAvailable} />

                <Label>Available</Label>
              </div>
            </CardTitle>
          </CardHeader>

          <CardContent>
            {!date ? (
              <div className="rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
                Select a date to manage availability.
              </div>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {defaultSlots.map((slot) => (
                  <Button
                    key={slot}
                    variant="outline"
                    className="justify-start"
                  >
                    {slot}
                  </Button>
                ))}
              </div>
            )}

            <Button className="mt-6 w-full">Save Availability</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
