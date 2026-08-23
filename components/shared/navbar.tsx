import { MenuItem, SiteMenubar } from "@/components/ui/site-menubar";

const menuItems: MenuItem[] = [
  { label: "Services", href: "/services" },
  { label: "Categories", href: "/categories" },
  { label: "Resources", href: "/" },
  // { label: "Pricing", href: "#pricing" },
];

export default function NavBar() {
  return <SiteMenubar siteName="FixNow" menuItems={menuItems} />;
}
