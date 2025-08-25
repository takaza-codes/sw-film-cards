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
            <Image src="/logo.png" alt="Logo" width={90} height={83} />
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-xl sm:text-2xl">
                <Link
                  href="/"
                  className="text-stone-800 font-bold hover:text-violet-600 transition-colors">
                  Main
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-xl sm:text-2xl">
                <Link
                  href="/new-entry"
                  className="text-stone-800 font-bold hover:text-violet-600 transition-colors">
                  Create a new entry
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className="text-xl sm:text-2xl">
                <Link
                  href="/about"
                  className="text-stone-800 font-bold hover:text-violet-600 transition-colors">
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
