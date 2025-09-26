import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const candidates = [
    path.join(process.cwd(), 'public', 'docs', 'intake-form.pdf'),
    path.join(process.cwd(), 'public', 'doc',  'intake-form.pdf'), // fallback if you ever move it back
  ];
  for (const filePath of candidates) {
    try {
      const file = await fs.readFile(filePath);
      return new Response(file, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': 'attachment; filename="intake-form.pdf"',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } catch {}
  }
  return new Response('Intake form not found', { status: 404 });
}
