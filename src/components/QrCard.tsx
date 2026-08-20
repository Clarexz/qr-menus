"use client";

import { useRef } from "react";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

function downloadBlob(blob: Blob, filename: string) {
  const blobUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = blobUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(blobUrl);
}

export default function QrCard({ url, businessName }: { url: string; businessName: string }) {
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const svgWrapRef = useRef<HTMLDivElement>(null);

  const slug = businessName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  function handleDownloadPng() {
    const canvas = canvasWrapRef.current?.querySelector("canvas");
    if (!canvas) return;
    canvas.toBlob((blob) => {
      if (blob) downloadBlob(blob, `qr-${slug}.png`);
    }, "image/png");
  }

  function handleDownloadSvg() {
    const svg = svgWrapRef.current?.querySelector("svg");
    if (!svg) return;
    const serialized = new XMLSerializer().serializeToString(svg);
    const blob = new Blob([serialized], { type: "image/svg+xml" });
    downloadBlob(blob, `qr-${slug}.svg`);
  }

  return (
    <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="rounded-xl border border-line bg-white p-4">
          <div ref={canvasWrapRef} className="hidden">
            <QRCodeCanvas value={url} size={512} level="M" marginSize={2} />
          </div>
          <div ref={svgWrapRef}>
            <QRCodeSVG value={url} size={220} level="M" marginSize={2} />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
            Apunta a
          </p>
          <p className="mt-1 break-all font-display text-lg text-ink">{url}</p>
          <p className="mt-3 text-sm text-ink-soft">
            Este código siempre lleva a la misma dirección. Puedes reemplazar cualquier
            impresión anterior sin volver a generar el QR: los cambios al menú se ven en
            vivo en esa misma URL.
          </p>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={handleDownloadPng}
              className="rounded-lg bg-terracotta px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-terracotta-dark"
            >
              Descargar PNG
            </button>
            <button
              type="button"
              onClick={handleDownloadSvg}
              className="rounded-lg border border-line px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-terracotta hover:text-terracotta"
            >
              Descargar SVG
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
