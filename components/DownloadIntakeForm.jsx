// components/DownloadIntakeForm.jsx
export default function DownloadIntakeForm() {
  return (
    <a
      className="inline-flex items-center rounded-2xl px-5 py-3 border border-slate-200 hover:bg-slate-50 transition"
      href="/doc/intake-form.pdf"   // or /doc/intake-form.docx
      download
    >
      Download Intake Form
    </a>
  );
}
