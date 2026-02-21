import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { blogCategories } from "@/data/blog";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.meta.title ?? "Douro Digital";
  const category = post
    ? blogCategories.find((c) => c.slug === post.meta.category)
    : null;
  const categoryLabel = category?.label ?? "Resources";
  const categoryColor = category?.color ?? "#D42918";

  const fontData = await readFile(
    join(process.cwd(), "public/fonts/space-grotesk.woff2")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#000",
          padding: "80px",
          fontFamily: "Space Grotesk",
        }}
      >
        {/* Top section */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Category pill */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <div
              style={{
                backgroundColor: categoryColor,
                color: "#fff",
                fontSize: 18,
                fontWeight: 700,
                padding: "8px 20px",
                borderRadius: 4,
                textTransform: "uppercase",
                letterSpacing: 1.5,
                display: "flex",
              }}
            >
              {categoryLabel}
            </div>
          </div>
          {/* Post title */}
          <div
            style={{
              fontSize: title.length > 60 ? 42 : 52,
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.2,
              display: "flex",
              maxWidth: 900,
            }}
          >
            {title}
          </div>
        </div>
        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#666",
              display: "flex",
            }}
          >
            dourodigital.com
          </div>
          {/* Accent dot */}
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: "#D42918",
              display: "flex",
            }}
          />
        </div>
        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: categoryColor,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: fontData,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
