import Link from "next/link"
import {
  Users,
  FolderKanban,
  Briefcase,
  Package,
  Building2,
  FileSpreadsheet,
  ArrowRight,
  BarChart3,
} from "lucide-react"
import { DashboardPieChart } from "@/components/piechart"
import { DashboardBarChart } from "@/components/barchart"

export default function AdminDashboard() {
  // Dashboard cards data
  const cards = [
    {
      title: "Users",
      count: "254",
      icon: Users,
      href: "/admin/users",
      color: "bg-blue-500 dark:bg-blue-600",
      description: "Active user accounts",
    },
    {
      title: "Projects",
      count: "12",
      icon: FolderKanban,
      href: "/admin/projects",
      color: "bg-green-500 dark:bg-green-600",
      description: "Ongoing projects",
    },
    {
      title: "Work Discipline",
      count: "8",
      icon: Briefcase,
      href: "/admin/work-discipline",
      color: "bg-purple-500 dark:bg-purple-600",
      description: "Discipline categories",
    },
    {
      title: "Work Packages",
      count: "47",
      icon: Package,
      href: "/admin/work-packages",
      color: "bg-yellow-500 dark:bg-yellow-600",
      description: "Active work packages",
    },
    {
      title: "Contractors",
      count: "18",
      icon: Building2,
      href: "/admin/contractors",
      color: "bg-pink-500 dark:bg-pink-600",
      description: "Registered contractors",
    },
    {
      title: "OERE",
      count: "32",
      icon: FileSpreadsheet,
      href: "/admin/oere",
      color: "bg-indigo-500 dark:bg-indigo-600",
      description: "OERE reports",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: Today at 09:41 AM
          </span>
        </div>
      </div>

  <div className="flex flex-col md:flex-row gap-6 mt-8">
  <DashboardPieChart />
  <DashboardBarChart />
</div>




      {/* Stats cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            href={card.href}
            key={card.title}
            className="group relative overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-500 dark:text-gray-400">
                  {card.title}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{card.count}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${card.color} text-white`}
              >
                <card.icon className="h-6 w-6" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 group-hover:bg-gray-300 dark:group-hover:bg-gray-600">
              <div className={`h-full w-1/3 ${card.color}`}></div>
            </div>
          </Link>
        ))}
      </div>

      {/* Activity + Quick actions */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent activity */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Recent Activity</h3>
            <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
              View all
            </button>
          </div>
          <div className="mt-4 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="flex items-start space-x-4 border-b border-gray-100 dark:border-gray-700 pb-4 last:border-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Project {i} updated</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    2 hours ago by Admin
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Quick Actions</h3>
          </div>
          <div className="mt-4 grid gap-2">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="flex items-center justify-between rounded-md border border-gray-200 dark:border-gray-700 p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-md ${card.color} text-white`}
                  >
                    <card.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium">
                    Manage {card.title}
                  </span>
                </div>
                <ArrowRight className="h-4 w-4 text-gray-400 dark:text-gray-500" />
              </Link>
            ))}
          </div>
        </div>
      </div>


    </div>
  )
}
