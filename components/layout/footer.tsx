import Link from "next/link";
import { Wrench } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const services = ["Plumbing", "Electrical", "Cleaning", "Painting"];

const company = [
  "About Us",
  "How It Works",
  "Become a Technician",
  "Contact Us",
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Wrench className="size-5" />
              </div>

              <span className="text-xl font-bold">
                FixIt<span className="text-primary">Now</span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
              Your trusted platform for finding reliable home service
              professionals whenever you need them.
            </p>

            <div className="mt-5 flex gap-2">
              <ButtonLink href="#">
                <FaFacebook className="size-4" />
              </ButtonLink>

              <ButtonLink href="#">
                <FaInstagram className="size-4" />
              </ButtonLink>

              <ButtonLink href="#">
                <FaTwitter className="size-4" />
              </ButtonLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold">Services</h3>

            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p>support@fixitnow.com</p>
              <p>+880 1234-567890</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} FixItNow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex size-9 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      {children}
    </Link>
  );
}
