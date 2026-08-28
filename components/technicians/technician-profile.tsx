"use client";

import { useState } from "react";
import { toast } from "sonner";

import {
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Star,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

import { updateTechnicianProfile } from "@/app/(dashboardGroup)/technician-dashboard/_actions/updateProfile";

export default function TechnicianProfile({ profile }: { profile: any }) {
  const [profileData, setProfileData] = useState(profile);

  const technician = profileData?.technicianProfile;

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    bio: technician?.bio || "",

    experience: technician?.experience || 0,

    hourlyRate: technician?.hourlyRate || 0,

    location: technician?.location || "",
  });

  const handleChange = (key: string, value: any) => {
    setForm((previous) => ({
      ...previous,

      [key]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await updateTechnicianProfile({
        bio: form.bio,

        experience: Number(form.experience),

        hourlyRate: Number(form.hourlyRate),

        location: form.location,
      });

      // Update profile instantly

      setProfileData((previous: any) => ({
        ...previous,

        technicianProfile: {
          ...previous.technicianProfile,

          bio: form.bio,

          experience: Number(form.experience),

          hourlyRate: Number(form.hourlyRate),

          location: form.location,
        },
      }));

      toast.success("Profile updated successfully");
    } catch (error: any) {
      toast.error(error.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 p-4 md:p-8">
      {/* Profile View */}

      <Card>
        <CardHeader>
          <CardTitle>My Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="flex gap-3">
              <User />

              <div>
                <p className="text-sm text-muted-foreground">Name</p>

                <p className="font-semibold">{profileData?.name || "N/A"}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Mail />

              <div>
                <p className="text-sm text-muted-foreground">Email</p>

                <p className="font-semibold">{profileData?.email || "N/A"}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone />

              <div>
                <p className="text-sm text-muted-foreground">Phone</p>

                <p className="font-semibold">{profileData?.phone || "N/A"}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <MapPin />

              <div>
                <p className="text-sm text-muted-foreground">City</p>

                <p className="font-semibold">{technician?.location || "N/A"}</p>
              </div>
            </div>
          </div>

          <hr />

          <h2 className="text-lg font-semibold">Technician Information</h2>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm text-muted-foreground">Bio</p>

              <p className="font-medium">{technician?.bio || "No bio"}</p>
            </div>

            <div className="flex gap-3">
              <Briefcase />

              <div>
                <p className="text-sm text-muted-foreground">Experience</p>

                <p className="font-medium">
                  {technician?.experience || 0} Years
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock />

              <div>
                <p className="text-sm text-muted-foreground">Hourly Rate</p>

                <p className="font-medium">৳{technician?.hourlyRate || 0}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Star />

              <div>
                <p className="text-sm text-muted-foreground">Rating</p>

                <p className="font-medium">{technician?.rating || 0}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Update Section */}

      <Card>
        <CardHeader>
          <CardTitle>Update Technician Profile</CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          <div>
            <label className="text-sm font-medium">Bio</label>

            <Textarea
              rows={4}
              value={form.bio}
              onChange={(e) => handleChange("bio", e.target.value)}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium">Experience (Years)</label>

              <Input
                type="number"
                value={form.experience}
                onChange={(e) => handleChange("experience", e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Hourly Rate</label>

              <Input
                type="number"
                value={form.hourlyRate}
                onChange={(e) => handleChange("hourlyRate", e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Location</label>

            <Input
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
            />
          </div>

          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
