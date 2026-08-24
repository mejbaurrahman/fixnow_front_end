import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import { getMe } from "@/service/getMe";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const user = await getMe();
  return (
    <div>
      <NavBar user={user} />
      {children}
      <Footer />
    </div>
  );
};

export default PublicGroupLayout;
