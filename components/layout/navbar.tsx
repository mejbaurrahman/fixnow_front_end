import { MenuItem, SiteMenubar } from "@/components/ui/site-menubar";

const menuItems: MenuItem[] = [
  { label: "Services", href: "/services" },
  { label: "Technicians", href: "/technicians" },
  { label: "Categories", href: "/categories" },
  // { label: "Pricing", href: "#pricing" },
];

export default function NavBar() {
  return <SiteMenubar siteName="FixNow" menuItems={menuItems} />;
}
