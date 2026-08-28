import AvailabilityPage from "@/components/technicians/availability-page";
import { getMe } from "@/service/getMe";

export default async function Page() {
  const user = await getMe();

  const technicianId: string = user?.data?.profile.id;

  return <AvailabilityPage technicianId={technicianId} />;
}
