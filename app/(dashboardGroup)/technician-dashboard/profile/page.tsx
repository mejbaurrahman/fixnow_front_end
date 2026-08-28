import TechnicianProfile from "@/components/technicians/technician-profile";
import { getMe } from "@/service/getMe";

export default async function ProfilePage() {
  const result = await getMe();

  return <TechnicianProfile profile={result.data.profile} />;
}
