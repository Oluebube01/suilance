"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Home,
  User,
  DollarSign,
  Briefcase,
  MessageSquare,
  AlertTriangle,
  LogOut,
  Menu,
  Search,
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const freelancerLinks = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Profile", href: "/dashboard/profile", icon: User },
  { name: "Browse Jobs", href: "/dashboard/browse-jobs", icon: Search },
  { name: "My Jobs", href: "/dashboard/jobs", icon: Briefcase },
  { name: "Payout", href: "/dashboard/payout", icon: DollarSign },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Disputes", href: "/dashboard/disputes", icon: AlertTriangle },
]

//const clientLinks = [
  //{ name: "Home", href: "/dashboard", icon: Home },
  //{ name: "Profile", href: "/dashboard/profile", icon: User },
 // { name: "Browse Freelancers", href: "/dashboard/browse-freelancers", icon: Users },
//  { name: "My Projects", href: "/dashboard/projects", icon: Briefcase },
 // { name: "Payments", href: "/dashboard/payments", icon: DollarSign },
//  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
//  { name: "Disputes", href: "/dashboard/disputes", icon: AlertTriangle },
//]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  //const [isClient, setIsClient] = useState(false)  This should be determined by user role
  const [isCollapsed, setIsCollapsed] = useState(false)

  const links =  freelancerLinks

  const handleLogout = () => {
    // Add any logout logic here (clear tokens, state, etc)
    router.push("/")
  }

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-800 transition-all duration-300 ease-in-out border-r border-border",
        "md:h-screen md:sticky md:top-0",
        isCollapsed ? "w-full md:w-20" : "w-full md:w-64",
      )}
    >
      <div className="flex justify-between items-center p-4">
        {!isCollapsed && (
          <Link href="/dashboard" className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            SUILANCE
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn("md:hidden", isCollapsed && "ml-auto")}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>
      <nav className={cn("space-y-2 p-2", isCollapsed && "hidden md:block")}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "flex items-center space-x-2 px-2 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700",
              pathname === link.href && "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
              isCollapsed && "md:justify-center md:px-0",
            )}
          >
            <link.icon className="w-5 h-5 flex-shrink-0" />
            {!isCollapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </nav>
      <div className={cn("absolute bottom-4 left-0 right-0 p-4", isCollapsed && "md:p-2")}>
        <div className="flex items-center justify-between mb-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {!isCollapsed && <ThemeToggle />}
        </div>
        <Button
          variant="outline"
          className={cn("w-full justify-center", isCollapsed && "md:p-2")}
          onClick={handleLogout}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="ml-2">Logout</span>}
        </Button>
      </div>
    </div>
  )
}

