import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";

const PublicGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicGroupLayout;
