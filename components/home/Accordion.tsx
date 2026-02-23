"use client";

import { useState } from "react";
import { PixelChevronDown } from "@/components/icons/PixelIcons";
import s from "./Accordion.module.css";

interface AccordionItem {
  title: string;
  description: string;
}

interface Props {
  items: AccordionItem[];
  defaultOpen?: number;
}

export default function Accordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState<number>(defaultOpen);

  function toggle(i: number) {
    setOpen(open === i ? -1 : i);
  }

  return (
    <div>
      {items.map((item, i) => (
        <div key={item.title} className={s.item}>
          <div
            className={s.header}
            role="button"
            tabIndex={0}
            aria-expanded={open === i}
            onClick={() => toggle(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(i);
              }
            }}
          >
            <span className={s.title}>{item.title}</span>
            <span
              className={s.arrow}
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0)" }}
            >
              <PixelChevronDown size={24} />
            </span>
          </div>
          <div
            className={s.body}
            style={{
              maxHeight: open === i ? "500px" : "0",
              opacity: open === i ? 1 : 0,
            }}
          >
            <p className={s.desc}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
