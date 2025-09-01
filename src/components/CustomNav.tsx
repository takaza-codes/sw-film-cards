import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="w-full mx-auto flex items-center justify-start px-5 py-4">
      <div className="flex items-center space-x-2 sm:space-x-8">
        <div>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={70} height={80} />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-xs sm:text-sm lg:text-xl">
                <Link href="/" className="nav-link">
                  Main
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-xs sm:text-sm lg:text-xl">
                <Link href="/new-entry" className="nav-link">
                  Create a new entry
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className="text-xs sm:text-sm lg:text-xl">
                <Link href="/about" className="nav-link">
                  Contact us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
