import NavBar from "@/components/shared/navbar";

const DashboardGroupLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardGroupLayout;
