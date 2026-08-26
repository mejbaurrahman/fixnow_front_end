"use client";

import { useEffect, useState } from "react";

import { CalendarDays, Clock, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";

import {
  getAvailability,
  createBooking,
} from "@/app/(publicGroup)/_actions/bookingActions";
import { IService } from "@/app/(publicGroup)/_types/types";
import { getMe } from "@/service/getMe";
import { redirect } from "next/navigation";
import { toast } from "sonner";

type Slot = {
  time: string;
  isBooked: boolean;
};

interface BookingFormProps {
  technicianId: string;

  services: IService[];
}

export function BookingForm({
  technicianId,

  services,
}: BookingFormProps) {
  const [selectedService, setSelectedService] = useState<IService | null>(null);

  // const [date, setDate] = useState<Date>();
  const [date, setDate] = useState<Date | undefined>(undefined);
  // console.log("selected date", date);
  // const [availabilityId, setAvailabilityId] = useState<string>();
  const [availabilityId, setAvailabilityId] = useState<string | null>(null);

  const [slots, setSlots] = useState<Slot[]>([]);

  const [selectedSlot, setSelectedSlot] = useState<string>();

  const [note, setNote] = useState("");

  const [loading, setLoading] = useState(false);

  const [slotLoading, setSlotLoading] = useState(false);
  const router = useRouter();

  const formatDate = (date: Date) => {
    const newDate = date.toISOString();
    console.log("Date", newDate);
    return newDate;
  };

  useEffect(() => {
    if (!date) {
      setSlots([]);

      return;
    }

    const loadAvailability = async () => {
      try {
        setSlotLoading(true);

        const result = await getAvailability(
          technicianId,

          formatDate(date),
        );

        setAvailabilityId(result?.data?.availabilityId);

        setSlots(result.data.slots);
      } finally {
        setSlotLoading(false);
      }
    };

    loadAvailability();
  }, [date, technicianId]);

  const handleBooking = async () => {
    if (!selectedService || !date || !selectedSlot || !availabilityId) {
      return;
    }

    setLoading(true);

    const payload = {
      technicianId,

      serviceId: selectedService.id,

      totalAmount: selectedService.price,

      availabilityId,

      bookingDate: date.toISOString(),

      slot: selectedSlot,

      note: note || undefined,
    };

    try {
      await createBooking(payload);

      toast.success("Booking created successfully");
    } catch (error) {
      console.log(error);

      toast.error("Booking failed");
    } finally {
      router.push("/dashboard");
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Book this technician</CardTitle>

        <CardDescription>Select service, date and time</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* SERVICE SELECT */}

        <div>
          <h3 className="mb-3 text-sm font-semibold">Select Service</h3>

          <Select
            onValueChange={(value) => {
              const service = services.find((item) => item.id === value);

              setSelectedService(service ?? null);
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Choose service" />
            </SelectTrigger>

            <SelectContent>
              {services?.map((service) => (
                <SelectItem key={service.id} value={service.id}>
                  {service?.title}- ৳{service?.price}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {selectedService && (
            <div className="mt-3 rounded-lg border p-3">
              <p className="text-sm text-muted-foreground">Selected Service</p>

              <div className="mt-1 flex justify-between">
                <span className="font-semibold">{selectedService?.title}</span>

                <span className="font-semibold">৳{selectedService.price}</span>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* DATE */}

        <div>
          <div className="mb-3 flex items-center gap-2">
            <CalendarDays className="size-4 text-primary" />

            <h3 className="text-sm font-semibold">Select Date</h3>
          </div>

          {/* <Calendar
            mode="single"
            selected={date}
            onSelect={(value) => {
              setDate(value);

              setSelectedSlot("");
            }}
          /> */}
          <Calendar
            mode="single"
            // selected={date}
            onSelect={(selectedDate) => {
              if (!selectedDate) return;
              selectedDate.setHours(12);
              setDate(selectedDate);

              setSelectedSlot("");

              // console.log("Selected calendar date:", selectedDate);
            }}
          />
        </div>

        <Separator />

        {/* SLOT */}

        <div>
          <div className="mb-3 flex items-center gap-2">
            <Clock className="size-4 text-primary" />

            <h3 className="text-sm font-semibold">Available Time</h3>
          </div>

          {slotLoading ? (
            <div className="flex gap-2 text-sm">
              <Loader2 className="size-4 animate-spin" />
              Loading slots
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {slots.map((slot) => (
                <Button
                  key={slot.time}
                  type="button"
                  disabled={slot.isBooked}
                  variant={selectedSlot === slot.time ? "default" : "outline"}
                  className={slot.isBooked ? "text-red-600 border-red-500" : ""}
                  onClick={() => {
                    if (!slot.isBooked) {
                      setSelectedSlot(slot.time);
                    }
                  }}
                >
                  {slot.time}

                  {slot.isBooked && " (Booked)"}
                </Button>
              ))}
            </div>
          )}
        </div>

        <Separator />

        {/* NOTE */}

        <div>
          <h3 className="mb-3 text-sm font-semibold">Additional Note</h3>

          <Textarea
            placeholder="Write instruction for technician (optional)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>

        <Button
          className="w-full"
          size="lg"
          disabled={
            loading ||
            !selectedService ||
            !date ||
            !selectedSlot ||
            !availabilityId
          }
          onClick={handleBooking}
        >
          {loading ? "Requesting..." : "Request Booking"}
        </Button>
      </CardContent>
    </Card>
  );
}
