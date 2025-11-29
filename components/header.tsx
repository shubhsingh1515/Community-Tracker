"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "/" },
    { name: "Benefits", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center w-full pointer-events-none">
      <motion.header
        initial={false}
        animate={{
          width: scrolled ? "min(1000px, calc(100% - 1rem))" : "100%",
          backgroundColor: scrolled
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(255, 255, 255, 0)",
          paddingTop: scrolled ? "0.5rem" : "0.75rem",
          paddingBottom: scrolled ? "0.5rem" : "0.75rem",
          borderRadius: scrolled ? "9999px" : "0px",
          marginTop: scrolled ? "0.5rem" : "0rem",
          backdropFilter: scrolled ? "blur(18px)" : "blur(0px)",
          boxShadow: scrolled
            ? "0 4px 20px rgba(0, 0, 0, 0.08)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          border: scrolled
            ? "1px solid rgba(230, 230, 230, 0.8)"
            : "1px solid transparent",
        }}
        className="flex items-center justify-between px-4 sm:px-6 pointer-events-auto"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-foreground rounded-sm flex-shrink-0" />
          <span className="text-foreground text-base sm:text-lg md:text-xl font-bold whitespace-nowrap">
            Dreelio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/signup">
            <Button className="bg-[#1d1d1f] hover:bg-[#2d2d2f] text-white px-5 lg:px-6 py-2 rounded-full font-semibold shadow-md transition-all text-sm">
              Try Dreelio free
            </Button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="h-9 w-9 sm:h-10 sm:w-10"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="bottom"
            className="rounded-t-3xl px-4 pb-8 max-h-[85vh] overflow-y-auto"
          >
            <SheetHeader className="mb-6">
              <SheetTitle className="text-left text-xl font-bold">
                Navigation
              </SheetTitle>
            </SheetHeader>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-base py-3 px-3 rounded-lg hover:bg-gray-100 transition-all font-medium"
                >
                  {item.name}
                </Link>
              ))}

              <Link href="/signup" className="w-full mt-4">
                <Button className="w-full bg-[#1d1d1f] hover:bg-[#2d2d2f] text-white px-6 py-6 rounded-full font-semibold text-base shadow-lg">
                  Try Dreelio free
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </motion.header>
    </div>
  );
}
