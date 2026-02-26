"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CAL_LINK = "josh-irizarry-axan3n/30min";

interface CalInlineEmbedProps {
  className?: string;
}

export default function CalInlineEmbed({ className }: CalInlineEmbedProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "inline" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        styles: { branding: { brandColor: "#D42918" } },
      });
    })();
  }, []);

  return (
    <div
      className={className}
      style={{ minHeight: "min(700px, 85vh)" }}
      data-cursor-hide
    >
      <Cal
        namespace="inline"
        calLink={CAL_LINK}
        config={{ layout: "month_view", theme: "dark" }}
        style={{ width: "100%", height: "100%", overflow: "auto" }}
      />
    </div>
  );
}
