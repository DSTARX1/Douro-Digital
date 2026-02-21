import Link from "next/link";
import { getContent } from "@/lib/content";
import { notFound } from "next/navigation";
import ContentEditor from "./ContentEditor";

export const dynamic = "force-dynamic";

export default async function ContentEditPage({
  params,
}: {
  params: Promise<{ key: string }>;
}) {
  const { key } = await params;
  const decodedKey = decodeURIComponent(key);
  const value = await getContent(decodedKey);

  if (value === null) notFound();

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <Link href="/admin/content" style={{ color: "#3b82f6", fontSize: 14 }}>
          &larr; Back to Content
        </Link>
      </div>
      <h1>Edit Content</h1>
      <p style={{ color: "#888", marginBottom: 24 }}>
        Key: <code style={{ color: "#fafafa", background: "#1a1a1a", padding: "2px 8px", borderRadius: 4 }}>{decodedKey}</code>
      </p>
      <ContentEditor contentKey={decodedKey} initialValue={value} />
    </>
  );
}
