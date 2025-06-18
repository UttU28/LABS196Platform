import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  title: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  // { 
  //   title: "Programs", 
  //   href: "#",
  //   children: [
  //     { title: "Accelerator", href: "/programs/accelerator" },
  //   ]
  // },
  { title: "About Us", href: "/about-us" },
  { title: "Programs", href: "/programs/accelerator" },
  { title: "Mentors", href: "/mentors" },
];

const Navbar = () => {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b transition-colors duration-300 bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="https://labs196.com/images/labs196_logo_black.png"
                alt="LABS196 Logo"
                className="h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => 
                !item.children ? (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "font-medium transition hover:labs-orange",
                      location === item.href ? "text-labs-orange" : "text-labs-navy dark:text-white"
                    )}
                  >
                    {item.title}
                  </Link>
                ) : (
                  <DropdownMenu key={item.title}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="link" className="font-medium transition hover:labs-orange text-labs-navy dark:text-white p-0">
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {item.children.map((child) => (
                        <Link key={child.title} href={child.href}>
                          <DropdownMenuItem>{child.title}</DropdownMenuItem>
                        </Link>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Menu">
                    <MenuIcon className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-4 py-4">
                    {navItems.map((item) => 
                      !item.children ? (
                        <Link
                          key={item.title}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 font-medium text-lg hover:text-labs-orange"
                        >
                          {item.title}
                        </Link>
                      ) : (
                        <Collapsible key={item.title}>
                          <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 font-medium text-lg hover:text-labs-orange">
                            <span>{item.title}</span>
                            <ChevronDown className="h-4 w-4" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="ml-4 space-y-1 pl-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.title}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-3 py-2 text-sm font-medium hover:text-labs-orange"
                              >
                                {child.title}
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      )
                    )}
                    <Separator className="my-2" />
                    <div className="px-3">
                      <ThemeToggle />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
