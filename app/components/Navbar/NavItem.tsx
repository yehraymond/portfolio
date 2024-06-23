import Link from "next/link";
import React from "react";

interface NavItemProps {
  href: string;
  text: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavItem({ href, text, onClick }: NavItemProps) {
  return (
    <li className="py-4 md:px-6 text-center border-b-2 md:border-b-0 border-blue-900 md:hover:bg-transparent group dark:text-light dark:border-dark">
      <Link href={href} onClick={onClick}>
        {text}
        <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900 dark:bg-dark"></span>
      </Link>
    </li>
  );
}
