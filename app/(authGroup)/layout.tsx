import NavBar from "@/components/layout/navbar";
import { getMe } from "@/service/getMe";

const AuthGroupLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getMe();
  return (
    <div>
      <NavBar user={user} />
      {children}
    </div>
  );
};

export default AuthGroupLayout;
