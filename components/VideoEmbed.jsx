// components/VideoEmbed.jsx
export default function VideoEmbed({ url, title = "Embedded video" }) {
const isDirect = /\.(mp4|webm|ogg)(\?|$)/i.test(url);
return (
<div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
{isDirect ? (
<video src={url} controls className="h-full w-full" />
) : (
<iframe
src={toEmbedURL(url)}
title={title}
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowFullScreen
className="h-full w-full"
/>
)}
</div>
);
}


function toEmbedURL(raw) {
try {
const u = new URL(raw);
const host = u.hostname.replace(/^www\./, "");
if (host.includes("youtube.com") && u.searchParams.get("v")) {
return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
}
if (host === "youtu.be") return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
if (host.includes("vimeo.com")) return `https://player.vimeo.com/video/${u.pathname.split("/").filter(Boolean).pop()}`;
if (host.includes("loom.com")) return raw.replace("/share/", "/embed/");
return raw;
} catch (e) {
return raw;
}
}