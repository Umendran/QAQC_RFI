"use client";

import { useState } from "react";
import { PlusCircle, ArrowUpDown, Download, Filter, X } from "lucide-react";

const initialRfis = [
  {
    id: 1,
    rfiType: "Internal",
    rfiNumber: "RFI-001",
    rfiId: "1001",
    project: "Project A",
    contractor: "Contractor X",
    oeRe: "OE1",
    rfiDate: "2023-01-10",
    workPackage: "WP-1",
    workDiscipline: "Civil",
    location: "Site 1",
    requestedInspectionDate: "2023-01-15",
    status: "Open",
    pdfReference: "https://drive.google.com/example1",
    documentCompleted: "Yes",
    preparedBy: "John Doe",
    attachments: [],
    qaqcPic: "",
    dateClaimed: "",
    inspections: [],
  },
  {
    id: 2,
    rfiType: "External",
    rfiNumber: "RFI-002",
    rfiId: "1002",
    project: "Project B",
    contractor: "Contractor Y",
    oeRe: "OE2",
    rfiDate: "2023-02-20",
    workPackage: "WP-2",
    workDiscipline: "Electrical",
    location: "Site 2",
    requestedInspectionDate: "2023-02-25",
    status: "Closed",
    pdfReference: "https://drive.google.com/example2",
    documentCompleted: "No",
    preparedBy: "Jane Smith",
    attachments: [],
    qaqcPic: "QAQC PIC 1",
    dateClaimed: "2023-02-28",
    inspections: [],
  },
];

const emptyRfi = {
  rfiType: "Internal",
  rfiNumber: "",
  rfiId: "",
  project: "",
  contractor: "",
  oeRe: "",
  rfiDate: "",
  workPackage: "",
  workDiscipline: "",
  location: "",
  requestedInspectionDate: "",
  status: "",
  pdfReference: "",
  documentCompleted: "No",
  preparedBy: "",
  attachments: [],
  qaqcPic: "",
  dateClaimed: "",
  inspections: [],
};

export default function RFIRequest() {
  const [rfis, setRfis] = useState(initialRfis);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("add"); // add | edit | view
  const [selectedRfi, setSelectedRfi] = useState(null);
  const [form, setForm] = useState(emptyRfi);

  const openAddModal = () => {
    setForm(emptyRfi);
    setModalType("add");
    setShowModal(true);
  };
  const openEditModal = (rfi) => {
    setForm(rfi);
    setSelectedRfi(rfi);
    setModalType("edit");
    setShowModal(true);
  };
  const openViewModal = (rfi) => {
    setForm(rfi);
    setSelectedRfi(rfi);
    setModalType("view");
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setSelectedRfi(null);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setForm((prev) => ({ ...prev, [name]: Array.from(files) }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (modalType === "add") {
      setRfis((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    } else if (modalType === "edit" && selectedRfi) {
      setRfis((prev) => prev.map((rfi) => (rfi.id === selectedRfi.id ? { ...form } : rfi)));
    }
    closeModal();
  };

  // Helper to render fields based on RFI type, with grouped cards and a professional two-column layout
  const renderFields = (isView = false) => {
    const isExternal = form.rfiType === "External";
    return (
      <div className="grid grid-cols-2 gap-8">
        {/* Left card */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">General</h3>
          <div className="grid grid-cols-1 gap-3">
            <label className="block text-sm">
              <span className="text-gray-700">RFI Type</span>
              <select
                name="rfiType"
                value={form.rfiType}
                onChange={handleChange}
                disabled={isView}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Internal">Internal</option>
                <option value="External">External</option>
              </select>
            </label>

            {isExternal && (
              <label className="block text-sm">
                <span className="text-gray-700">QAQC PIC</span>
                <input
                  type="text"
                  name="qaqcPic"
                  value={form.qaqcPic}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
            )}

            <label className="block text-sm">
              <span className="text-gray-700">RFI Number</span>
              <input
                type="text"
                name="rfiNumber"
                value={form.rfiNumber}
                onChange={handleChange}
                disabled={isView}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">
                <span className="text-gray-700">RFI Id</span>
                <input
                  type="text"
                  name="rfiId"
                  value={form.rfiId}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
              <label className="block text-sm">
                <span className="text-gray-700">RFI Date</span>
                <input
                  type="date"
                  name="rfiDate"
                  value={form.rfiDate}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Right card */}
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Details</h3>
          <div className="grid grid-cols-1 gap-5">
            <label className="block text-sm">
              <span className="text-gray-700">Project</span>
              <input
                type="text"
                name="project"
                value={form.project}
                onChange={handleChange}
                disabled={isView}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">
                <span className="text-gray-700">Contractor</span>
                <input
                  type="text"
                  name="contractor"
                  value={form.contractor}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
              <label className="block text-sm">
                <span className="text-gray-700">OE/RE</span>
                <input
                  type="text"
                  name="oeRe"
                  value={form.oeRe}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
            </div>

            <label className="block text-sm">
              <span className="text-gray-700">Work Package</span>
              <input
                type="text"
                name="workPackage"
                value={form.workPackage}
                onChange={handleChange}
                disabled={isView}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">
                <span className="text-gray-700">Work Discipline</span>
                <input
                  type="text"
                  name="workDiscipline"
                  value={form.workDiscipline}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
              <label className="block text-sm">
                <span className="text-gray-700">Location</span>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="block text-sm">
                <span className="text-gray-700">Requested Inspection Date</span>
                <input
                  type="date"
                  name="requestedInspectionDate"
                  value={form.requestedInspectionDate}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
              <label className="block text-sm">
                <span className="text-gray-700">Status</span>
                <input
                  type="text"
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  disabled={isView}
                  className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Full width bottom card for links/attachments */}
        <div className="md:col-span-2 bg-white p-4 rounded-lg border">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">References & Attachments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="block text-sm md:col-span-1">
              <span className="text-gray-700">PDF Reference</span>
              <input
                type="url"
                name="pdfReference"
                value={form.pdfReference}
                onChange={handleChange}
                disabled={isView}
                placeholder="https://drive.google.com/..."
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>

            <label className="block text-sm md:col-span-1">
              <span className="text-gray-700">Document Completed</span>
              <select
                name="documentCompleted"
                value={form.documentCompleted}
                onChange={handleChange}
                disabled={isView}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>

            <label className="block text-sm md:col-span-1">
              <span className="text-gray-700">Prepared By</span>
              <input
                type="text"
                name="preparedBy"
                value={form.preparedBy}
                onChange={handleChange}
                disabled={isView}
                className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </label>

            <div className="md:col-span-3">
              <label className="block text-sm">
                <span className="text-gray-700">Attachments {isView ? "(List)" : "(Images or PDFs)"}</span>
                {isView ? (
                  <ul className="list-disc ml-5 mt-2">
                    {form.attachments && form.attachments.length > 0 ? (
                      form.attachments.map((file, idx) => (
                        <li key={idx}>{typeof file === "string" ? file : file.name}</li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-500">None</li>
                    )}
                  </ul>
                ) : (
                  <input
                    type="file"
                    name="attachments"
                    multiple
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                )}
              </label>
            </div>

            {isExternal && (
              <div className="md:col-span-3">
                <label className="block text-sm">
                  <span className="text-gray-700">Inspections (Images or PDFs)</span>
                  {isView ? (
                    <ul className="list-disc ml-5 mt-2">
                      {form.inspections && form.inspections.length > 0 ? (
                        form.inspections.map((file, idx) => (
                          <li key={idx}>{typeof file === "string" ? file : file.name}</li>
                        ))
                      ) : (
                        <li className="text-sm text-gray-500">None</li>
                      )}
                    </ul>
                  ) : (
                    <input
                      type="file"
                      name="inspections"
                      multiple
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                  )}
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Modal for Add/Edit/View */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl overflow-y-auto max-h-[90vh]">
            <h2 className="text-xl font-bold mb-4">
              {modalType === "add" && "Create RFI"}
              {modalType === "edit" && "Edit RFI"}
              {modalType === "view" && "View RFI"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {renderFields(modalType === "view")}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                  onClick={closeModal}
                >
                  {modalType === "view" ? "Close" : "Cancel"}
                </button>
                {modalType !== "view" && (
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                  >
                    {modalType === "add" ? "Add" : "Save"}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <h1 className="text-2xl font-bold tracking-tight">RFI Requests</h1>
        <button
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={openAddModal}
        >
          <PlusCircle className="mr-2 h-4 w-4" />
          Add RFI
        </button>
      </div>

      <div className="rounded-lg border bg-white shadow">
        <div className="flex flex-col space-y-3 p-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 border-b">
          <div className="relative w-full sm:max-w-xs">
            <input
              type="text"
              placeholder="Search RFI..."
              className="h-10 w-full rounded-md border border-gray-300 pl-4 pr-4 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
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
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>RFI Number</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>Type</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>Project</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <ArrowUpDown className="h-4 w-4" />
                  </div>
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {rfis.map((rfi) => (
                <tr key={rfi.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">{rfi.rfiNumber}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{rfi.rfiType}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <div className="text-sm text-gray-900">{rfi.project}</div>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className="inline-flex rounded-full px-2 text-xs font-semibold leading-5 bg-blue-100 text-blue-800">
                      {rfi.status}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium flex gap-2 justify-end">
                    <button
                      className="inline-flex items-center px-2 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs"
                      title="View"
                      onClick={() => openViewModal(rfi)}
                    >
                      View
                    </button>
                    <button
                      className="inline-flex items-center px-2 py-1 rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200 text-xs"
                      title="Edit"
                      onClick={() => openEditModal(rfi)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
