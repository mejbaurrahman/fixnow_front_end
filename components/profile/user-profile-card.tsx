import Image from "next/image";

import {
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Briefcase,
  Star,
  Clock,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { UserProfile } from "@/app/(dashboardGroup)/_types/types";

export function UserProfileCard({ profile }: { profile: UserProfile }) {
  return (
    <div className="space-y-6">
      {/* Common Profile */}

      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex flex-col gap-6 md:flex-row">
            <div>
              {profile?.image ? (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={120}
                  height={120}
                  className="rounded-xl object-cover"
                />
              ) : (
                <div className="flex size-28 items-center justify-center rounded-xl bg-muted text-3xl font-bold">
                  {profile?.name?.charAt(0)}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">{profile?.name}</h2>

                <Badge>{profile?.role}</Badge>
              </div>

              <div className="flex gap-2 text-sm text-muted-foreground">
                <Mail className="size-4" />

                {profile?.email}
              </div>

              <div className="flex gap-2 text-sm text-muted-foreground">
                <Phone className="size-4" />

                {profile?.phone}
              </div>

              <div className="flex gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4" />

                {profile.city || "No city"}
              </div>

              <div className="flex gap-2 text-sm text-muted-foreground">
                <CalendarDays className="size-4" />
                Joined:
                {new Date(profile.createdAt).toLocaleDateString()}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technician Extra Information */}

      {profile.role === "TECHNICIAN" && profile.technicianProfile && (
        <Card>
          <CardHeader>
            <CardTitle>Technician Information</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Briefcase className="size-5" />

                  <span className="font-medium">Experience</span>
                </div>

                <p className="mt-2 text-2xl font-bold">
                  {profile.technicianProfile.experience}+ Years
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Clock className="size-5" />

                  <span className="font-medium">Hourly Rate</span>
                </div>

                <p className="mt-2 text-2xl font-bold">
                  ৳{profile.technicianProfile.hourlyRate}
                </p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="size-5" />

                  <span className="font-medium">Service Location</span>
                </div>

                <p className="mt-2">{profile.technicianProfile.location}</p>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Star className="size-5" />

                  <span className="font-medium">Rating</span>
                </div>

                <p className="mt-2 text-2xl font-bold">
                  {profile?.technicianProfile.rating}
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold">Bio</h3>

              <p className="mt-2 text-muted-foreground">
                {profile?.technicianProfile?.bio}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
