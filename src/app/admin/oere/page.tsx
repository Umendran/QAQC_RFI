"use client";

import { useState } from "react";
import PdfEditor from "@/components/PdfEditor";
import { PlusCircle, Search, Filter, MoreHorizontal, ArrowUpDown, Download } from "lucide-react"

export default function CMSPage() {

const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  // Sample project data
  const projects = [
    {
      id: 1,
      name: "A1",
      client: "TBSKS45",
      status: "In Progress",
      // progress: 65,
      startDate: "Jan 10, 2023",
      endDate: "Jun 15, 2023",
      pdfUrl: "/pdfs/A1.pdf",
    },
    {
      id: 2,
      name: "C7",
      client: "TBSKS45",
      status: "Planning",
      // progress: 25,
      startDate: "Mar 5, 2023",
      endDate: "Sep 30, 2023",
      pdfUrl: "/pdfs/C7.pdf",
    },
    {
      id: 3,
      name: "C4",
      client: "TBSKS45",
      status: "Completed",
      // progress: 100,
      startDate: "Nov 15, 2022",
      endDate: "Feb 28, 2023",
      pdfUrl: "/pdfs/C4.pdf",
    },
    {
      id: 4,
      name: "SF1",
      client: "TBSKS45",
      status: "In Progress",
      // progress: 45,
      startDate: "Feb 1, 2023",
      endDate: "Jul 31, 2023",
      pdfUrl: "/pdfs/SF1.pdf",
    },

  ]
  if (selectedPdf) {
    return <PdfEditor fileUrl={selectedPdf} onClose={() => setSelectedPdf(null)} />;
  }
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <h1 className="text-2xl font-bold tracking-tight">OERE Details</h1>
        <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Checklist
        </button>
      </div>

      <div className="rounded-lg border bg-white shadow">
        <div className="flex flex-col space-y-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 border-b">
          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search checklist..."
              className="h-10 w-full rounded-md border border-gray-300 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </button>
            <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              <Download className="mr-2 h-4 w-4" />
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  <div className="flex items-center space-x-1">
                    <span>Template Name</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  <div className="flex items-center space-x-1">
                    <span>Related Project</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                {/* <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  <div className="flex items-center space-x-1">
                    <span>Progress</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th> */}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  <div className="flex items-center space-x-1">
                    <span>Timeline</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{project.name}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{project.client}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                        project.status === "In Progress"
                          ? "bg-blue-100 text-blue-800"
                          : project.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  {/* <td className="whitespace-nowrap px-6 py-4">
                    <div className="w-full max-w-xs">
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <div
                          className={`h-2 rounded-full ${
                            project.progress >= 80
                              ? "bg-green-500"
                              : project.progress >= 40
                                ? "bg-blue-500"
                                : "bg-yellow-500"
                          }`}
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500">{project.progress}%</div>
                    </div>
                  </td> */}
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {project.startDate} - {project.endDate}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                    <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 hover:text-gray-300" 
                    onClick={() => setSelectedPdf(project.pdfUrl)}
                    >
                     View PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </button>
            <button className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
                <span className="font-medium">12</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  aria-current="page"
                  className="relative z-10 inline-flex items-center bg-blue-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  3
                </button>
                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
