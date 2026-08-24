import { MenuItem, SiteMenubar } from "@/components/ui/site-menubar";
import { IUserResponse, NavbarProps } from "@/lib/responseType";

const menuItems: MenuItem[] = [
  { label: "Services", href: "/services" },
  { label: "Technicians", href: "/technicians" },
  { label: "Categories", href: "/categories" },
  // { label: "Pricing", href: "#pricing" },
];

export default function NavBar({ user }: NavbarProps) {
  return <SiteMenubar siteName="FixNow" menuItems={menuItems} user={user} />;
}
