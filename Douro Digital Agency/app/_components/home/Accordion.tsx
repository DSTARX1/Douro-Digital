"use client";

import { useState } from "react";
import { PixelChevronDown } from "@/app/_components/icons/PixelIcons";

interface AccordionItem {
  title: string;
  description: string;
}

interface Props {
  items: AccordionItem[];
  defaultOpen?: number;
}

const itemStyle: React.CSSProperties = {
  borderBottom: "1px solid var(--border)",
  cursor: "pointer",
};

const headerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 0",
};

const titleStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 500,
  lineHeight: "30px",
};

const descStyle: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 500,
  lineHeight: "30px",
  color: "var(--muted)",
  paddingBottom: 20,
};

const arrowStyle: React.CSSProperties = {
  width: 24,
  height: 24,
  transition: "transform 0.3s",
};

export default function Accordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number>(defaultOpen);

  return (
    <div>
      {items.map((item, i) => (
        <div key={item.title} style={itemStyle} onClick={() => setOpen(open === i ? -1 : i)}>
          <div style={headerStyle}>
            <span style={titleStyle}>{item.title}</span>
            <span style={{
              ...arrowStyle,
              display: "inline-flex",
              transform: open === i ? "rotate(180deg)" : "rotate(0)",
            }}>
              <PixelChevronDown size={24} />
            </span>
          </div>
          <div
            style={{
              overflow: "hidden",
              maxHeight: open === i ? "500px" : "0",
              opacity: open === i ? 1 : 0,
              transition: "max-height 0.3s ease, opacity 0.3s ease",
            }}
          >
            <p style={descStyle}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
