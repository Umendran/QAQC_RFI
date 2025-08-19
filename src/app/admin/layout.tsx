"use client"

import type React from "react"
import { ThemeProvider, useTheme } from "next-themes";
import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Users,
  FolderKanban,
  Briefcase,
  Package,
  Building2,
  FileSpreadsheet,
  FileBox,
  Bell,
  Search,
  Menu,
  Moon,
  Sun,
  X,
  LogOut,
  User,
} from "lucide-react"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class">
          <AdminLayout>{children}</AdminLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}


function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const searchParams = useSearchParams()

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: BarChart3 },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Work Discipline", href: "/admin/work-discipline", icon: Briefcase },
    { name: "Work Packages", href: "/admin/work-packages", icon: Package },
    { name: "Contractors", href: "/admin/contractors", icon: Building2 },
    { name: "OERE", href: "/admin/oere", icon: FileSpreadsheet },
    { name: "CMS", href: "/admin/cms", icon: FileBox },
  ]
const { theme, setTheme } = useTheme();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="flex h-16 items-center justify-between border-b px-4">
            <Link href="/admin" className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-gray-200">Admin Portal</span>
            </Link>
            <button
              className="rounded-md p-2 text-gray-500 dark:text-gray-200 hover:bg-gray-100 hover:text-gray-600 md:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-5 px-2">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-300 dark:hover:text-black hover:bg-gray-100 hover:text-gray-900"
                >
                  <item.icon className="mr-3 h-5 w-5 text-gray-500 group-hover:text-gray-600" />
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main content */}
        <div className="flex flex-col md:pl-64">
          {/* Top navigation */}
          <header className="sticky top-0 z-10 flex h-16 items-center justify-between bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-sm px-4 md:px-6">
            <button
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            <div className="flex flex-1 justify-end items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-200" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 w-full rounded-md border border-gray-300 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 md:w-60"
                />
              </div>

              <button
                className="relative rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-600"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </button>

              <button className="relative rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-600 ">
                <Bell className="h-6 w-6" />
                <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-red-500"></span>
              </button>

              <div className="relative">
                <button className="flex items-center space-x-2 rounded-full p-1 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <User className="h-5 w-5" />
                  </div>
                  <span className="hidden text-sm font-medium md:block dark:text-gray-200">Admin User</span>
                </button>
              </div>

              <button className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </Suspense>
  )
}
