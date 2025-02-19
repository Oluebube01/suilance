"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, User, DollarSign, Briefcase, MessageSquare, AlertTriangle, LogOut, Menu } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const freelancerLinks = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Payout", href: "/dashboard/payout", icon: DollarSign },
  { name: "Jobs", href: "/dashboard/jobs", icon: Briefcase },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Disputes", href: "/dashboard/disputes", icon: AlertTriangle },
]

const clientLinks = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Payments", href: "/dashboard/payments", icon: DollarSign },
  { name: "Post Job", href: "/dashboard/post-job", icon: Briefcase },
  { name: "Hire Freelancers", href: "/dashboard/hire", icon: User },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Disputes", href: "/dashboard/disputes", icon: AlertTriangle },
]

export function Sidebar() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false) // This should be determined by user role
  const [isCollapsed, setIsCollapsed] = useState(false)

  const links = isClient ? clientLinks : freelancerLinks

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 h-screen transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && (
          <Link href="/dashboard" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            SUILANCE
          </Link>
        )}
        <Button variant="ghost" size="icon" onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <nav className="space-y-2 p-2">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center space-x-2 px-2 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
              pathname === link.href && "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
              isCollapsed && "justify-center",
            )}
          >
            <link.icon className="w-5 h-5" />
            {!isCollapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-4 left-0 right-0 p-4">
        <div className="flex items-center justify-between mb-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {!isCollapsed && <ThemeToggle />}
        </div>
        <Button variant="outline" className={cn("w-full justify-center", isCollapsed && "p-2")}>
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  )
}

