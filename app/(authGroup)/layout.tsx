import NavBar from "@/components/layout/navbar";

const AuthGroupLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default AuthGroupLayout;
