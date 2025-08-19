"use client";

import { useEffect, useRef } from "react";

export default function PdfEditor({
  fileUrl,
  onClose,
}: {
  fileUrl: string;
  onClose: () => void;
}) {
  const viewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let instance: any;

    const loadViewer = async () => {
      const WebViewer = (await import("@pdftron/webviewer")).default;

      WebViewer(
        {
          path: "/webviewer", // public/webviewer
          initialDoc: fileUrl,
          licenseKey: "demo:1755571763658:6068bd8e030000000079e30adf1cd37aa8f204810c915d9055d36a83c3", 
        },
        viewerRef.current!
      ).then((inst) => {
        instance = inst;
        const { Core, UI } = inst;

        UI.setHeaderItems(() => [
          {
            type: "actionButton",
            img: "https://img.icons8.com/ios-glyphs/30/download--v1.png",
            title: "Download",
            onClick: async () => {
              const doc = Core.documentViewer.getDocument();
              const data = await doc.getFileData();
              const blob = new Blob([data], { type: "application/pdf" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = "edited.pdf";
              a.click();
              URL.revokeObjectURL(url);
            },
          },
        ]);
      });
    };

    loadViewer();

    return () => {
      if (instance?.UI) instance.UI.dispose();
    };
  }, [fileUrl]);

  return (
    <div className="relative w-full h-[85vh]">
      <div ref={viewerRef} className="w-full h-full" />

      {/* Floating back button */}
      <button
        onClick={onClose}
        className="absolute top-6 mt-8 rounded-full bg-white border border-gray-300 shadow-md p-2 hover:bg-gray-100 transition"
        title="Back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-800"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
    </div>
  );
}
