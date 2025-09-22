// components/WallpaperCard.jsx
"use client";
import Image from "next/image";
import { useCallback } from "react";

export default function WallpaperCard({ item }) {
  const onDownload = useCallback(() => {
    // GA4 (if gtag is present)
    window.gtag?.("event", "download_wallpaper", {
      value: item.slug,
      item_id: item.slug,
      item_name: item.title,
    });
  }, [item]);

  return (
    <div className="group rounded-2xl border border-brand-cta-hover bg-sky-50/60 hover:bg-sky-50 transition overflow-hidden">
      <div className="relative w-full aspect-[9/19]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(min-width:768px) 25vw, 100vw"
          className="object-cover transition group-hover:scale-[1.02]"
        />
      </div>

      <div className="p-4">
        <div className="font-medium text-slate-900">{item.title}</div>
        {item.tags?.length ? (
          <div className="mt-2 flex flex-wrap gap-2 text-xs">
            {item.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-sky-100 bg-sky-50 px-2 py-0.5 text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-4">
          <a
            href={item.src}
            download
            onClick={onDownload}
            className="inline-flex items-center justify-center rounded-xl2 border border-gray-200 px-4 py-2 text-sm transition hover:border-brand-cta-hover hover:text-brand-cta-hover"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
