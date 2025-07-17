import Link from 'next/link';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-start px-4 py-4">
      <div className="flex items-center space-x-8">
    
    {/* !заменить на картинку! */}
        <div className="text-2xl font-bold text-stone-800">
          <Link href="/" >
            UserCards
          </Link>
        </div>
        <NavigationMenu>
          <NavigationMenuList className="flex">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="text-stone-700 hover:text-pink-600 transition-colors"
                >
                  Main
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-stone-700 hover:text-pink-600 transition-colors">
                More
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="flex flex-col space-y-2 p-4">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/contacts"
                      className="text-stone-700 hover:text-pink-600 transition-colors"
                    >
                      About
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/about"
                      className="text-stone-700 hover:text-pink-600 transition-colors"
                    >
                      Contacts
                    </Link>
                  </NavigationMenuLink>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}

