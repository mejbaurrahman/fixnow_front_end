import { UserProfileCard } from "@/components/profile/user-profile-card";
import { UserProfileDetails } from "@/components/profile/user-profile-details";
import { getMe } from "@/service/getMe";

export default async function ProfilePage() {
  const user = await getMe();
  console.log(user);

  return <UserProfileDetails profile={user?.data?.profile} />;
}
