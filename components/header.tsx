"use client"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function Header() {
  const navItems = [
    { name: "Features", href: "/" },
    { name: "Benefits", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ]

  return (
    <header className="w-full py-4 px-6 bg-gradient-to-b from-blue-50/80 to-transparent backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2"
        >
          <span className="text-foreground text-2xl font-black">Dreelio</span>
        </motion.div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <Link
                href={item.href}
                className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg font-medium transition-colors text-sm"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden md:block"
          >
            <Link href="/signup">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-2 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all">
                Try Dreelio free
              </Button>
            </Link>
          </motion.div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="bottom" className="bg-white border-t-2 border-gray-100">
              <SheetHeader>
                <SheetTitle className="text-left text-xl font-bold text-foreground">Navigation</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-3 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-base py-2 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link href="/signup" className="w-full mt-4">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-full font-semibold">
                    Try Dreelio free
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
