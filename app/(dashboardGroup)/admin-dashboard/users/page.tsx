import { Badge } from "@/components/ui/badge";

import { Card, CardContent } from "@/components/ui/card";

import { getUsers } from "../../_actions/getUsers";

import { UserProfile } from "../../_types/types";

import { BanUserButton } from "@/components/admin/ban-user-button";

export default async function UsersPage() {
  const result = await getUsers();

  const users: UserProfile[] = result?.data || [];

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}

      <div>
        <h1 className="text-2xl font-bold md:text-3xl">Users Management</h1>

        <p className="mt-2 text-muted-foreground">
          Manage all customers and technicians
        </p>
      </div>

      <Card>
        <CardContent className="p-0">
          {/* Desktop Table */}

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Email
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-medium">
                    Role
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-medium">
                    Status
                  </th>

                  <th className="px-6 py-4 text-center text-sm font-medium">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {users.map((user: UserProfile) => (
                  <tr key={user.id} className="transition hover:bg-muted/30">
                    <td className="px-6 py-4 font-medium">{user.name}</td>

                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {user.email}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <Badge>{user.role}</Badge>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <Badge
                        variant={
                          user.status === "BAN" ? "destructive" : "outline"
                        }
                      >
                        {user.status}
                      </Badge>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <BanUserButton
                        userId={user.id}
                        userName={user.name}
                        status={user.status}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile View */}

          <div className="divide-y md:hidden">
            {users.map((user) => (
              <div key={user.id} className="space-y-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">{user.name}</h3>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>

                  <Badge>{user.role}</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>

                  <Badge
                    variant={user.status === "BAN" ? "destructive" : "outline"}
                  >
                    {user.status}
                  </Badge>
                </div>

                <BanUserButton
                  userId={user.id}
                  userName={user.name}
                  status={user.status}
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
