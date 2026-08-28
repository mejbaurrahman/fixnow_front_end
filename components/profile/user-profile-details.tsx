import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Briefcase,
  Star,
  Clock,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { UserProfile } from "@/app/(dashboardGroup)/_types/types";

export function UserProfileDetails({ profile }: { profile: UserProfile }) {
  const getInitial = profile.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <div className="space-y-10">
      <div className="flex flex-col gap-6 rounded-2xl border bg-background p-6 md:flex-row">
        <div>
          {profile.image ? (
            <Image
              src={profile.image}
              alt={profile.name || "User"}
              width={130}
              height={130}
              className="size-32 rounded-2xl object-cover"
            />
          ) : (
            <div className="flex size-32 items-center justify-center rounded-2xl bg-muted text-4xl font-bold">
              {getInitial}
            </div>
          )}
        </div>

        {/* Basic Info */}

        <div className="flex-1 space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold">
              {profile.name || "Unknown User"}
            </h1>

            <Badge>{profile.role || "USER"}</Badge>

            <Badge variant="outline">
              <ShieldCheck className="mr-1 size-4" />

              {profile.status || "ACTIVE"}
            </Badge>
          </div>

          <div className="grid gap-3 text-sm md:grid-cols-2">
            <ProfileItem
              icon={<Mail />}
              label="Email"
              value={profile.email || "Email not provided"}
            />

            <ProfileItem
              icon={<Phone />}
              label="Phone"
              value={profile.phone || "Phone number not provided"}
            />

            <ProfileItem
              icon={<MapPin />}
              label="City"
              value={profile.city || "Location not provided"}
            />

            <ProfileItem
              icon={<CalendarDays />}
              label="Joined"
              value={
                profile.createdAt
                  ? new Date(profile.createdAt).toLocaleDateString()
                  : "Date unavailable"
              }
            />
          </div>
        </div>
      </div>

      {/* ======================
          TECHNICIAN DETAILS
      ======================= */}

      {profile.role === "TECHNICIAN" && profile.technicianProfile && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Technician Information</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <InfoBox
              icon={<Briefcase />}
              title="Experience"
              value={
                profile.technicianProfile.experience
                  ? `${profile.technicianProfile.experience} Years`
                  : "Experience not added"
              }
            />

            <InfoBox
              icon={<Clock />}
              title="Hourly Rate"
              value={
                profile.technicianProfile.hourlyRate
                  ? `৳${profile.technicianProfile.hourlyRate}`
                  : "Rate not set"
              }
            />

            <InfoBox
              icon={<MapPin />}
              title="Service Location"
              value={
                profile.technicianProfile.location || "Location not provided"
              }
            />

            <InfoBox
              icon={<Star />}
              title="Rating"
              value={
                profile.technicianProfile.rating
                  ? `${profile.technicianProfile.rating}/5`
                  : "No ratings yet"
              }
            />
          </div>

          <div className="rounded-xl border p-6">
            <h3 className="font-semibold">About Technician</h3>

            <p className="mt-3 leading-7 text-muted-foreground">
              {profile.technicianProfile.bio ||
                "No professional information has been added yet."}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function ProfileItem({
  icon,

  label,

  value,
}: {
  icon: React.ReactNode;

  label: string;

  value: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="text-muted-foreground">{icon}</div>

      <div>
        <p className="text-xs text-muted-foreground">{label}</p>

        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

function InfoBox({
  icon,

  title,

  value,
}: {
  icon: React.ReactNode;

  title: string;

  value: string;
}) {
  return (
    <div className="rounded-xl border p-5">
      <div className="flex items-center gap-3">
        <div className="text-primary">{icon}</div>

        <p className="font-medium">{title}</p>
      </div>

      <p className="mt-3 text-xl font-bold">{value}</p>
    </div>
  );
}
