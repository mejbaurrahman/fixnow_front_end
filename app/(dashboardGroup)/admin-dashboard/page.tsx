import { Users, Wrench, CalendarCheck, Layers, TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import { getUsers } from "../_actions/getUsers";
import { getTechnicians } from "@/app/(publicGroup)/_actions/getTechnicians";
import { getBookingsByAdmin } from "../_actions/getBookings";
import { getCategories } from "@/app/(publicGroup)/_actions/getCategories";

export default async function AdminDashboardPage() {
  const result = await getUsers();
  const users = result?.data.length || 0;
  const result2 = await getTechnicians();
  const technicians = result2?.data.length || 0;
  const result3 = await getBookingsByAdmin();
  const bookings = result3?.data.length || 0;
  const result4 = await getCategories();
  const categories = result4?.data.length || 0;
  const stats = [
    {
      title: "Total Users",
      value: users,
      icon: Users,
    },

    {
      title: "Technicians",
      value: technicians,
      icon: Wrench,
    },

    {
      title: "Bookings",
      value: bookings,
      icon: CalendarCheck,
    },

    {
      title: "Categories",
      value: categories,
      icon: Layers,
    },
  ];

  return (
    <div className="space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <p className="text-muted-foreground mt-2">Manage FixItNow platform</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <Card key={item.title}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>

                  <h2 className="mt-2 text-3xl font-bold">{item.value}</h2>
                </div>

                <Icon className="size-10 text-primary" />
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Management</h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link href="/admin-dashboard/users">
            <Card className="hover:border-primary transition cursor-pointer">
              <CardHeader>
                <CardTitle>Users Management</CardTitle>
              </CardHeader>

              <CardContent>View users, roles and status</CardContent>
            </Card>
          </Link>

          <Link href="/admin-dashboard/categories">
            <Card className="hover:border-primary transition cursor-pointer">
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>

              <CardContent>Create and manage service categories</CardContent>
            </Card>
          </Link>

          <Link href="/admin-dashboard/bookings">
            <Card className="hover:border-primary transition cursor-pointer">
              <CardHeader>
                <CardTitle>Bookings</CardTitle>
              </CardHeader>

              <CardContent>Monitor all service bookings</CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
