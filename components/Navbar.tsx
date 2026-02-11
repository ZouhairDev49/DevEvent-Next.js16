"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    { name: "home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Create Event", href: "/createEvent" },
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
  ];
  const pathname = usePathname();
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
          <p>DevEvent</p>
        </Link>
        <ul>
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                className={isActive ? "underline" : "none"}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
