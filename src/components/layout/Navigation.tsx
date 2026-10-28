"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function Navigation({
  mobile = false,
  onClose,
}: NavigationProps) {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/dealer", label: "Find a Dealer" }, // <-- IDINAGDAG NATIN ITO
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  const linkClass = (href: string) => {
    const isActive = pathname === href;
    return `${
      isActive
        ? "text-yellow-300 font-bold"
        : "text-white hover:text-gray-200 font-medium"
    } transition-colors duration-200 ${mobile ? "block py-2 text-lg" : ""}`;
  };

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={linkClass(item.href)}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center space-x-6 lg:space-x-8">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className={linkClass(item.href)}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
