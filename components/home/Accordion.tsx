"use client";

import { PixelChevronDown } from "@/components/icons/PixelIcons";
import { useRef, useState } from "react";
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
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  function toggle(i: number) {
    setOpen(open === i ? -1 : i);
  }

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        const scrollH = contentRefs.current[i]?.scrollHeight ?? 0;

        return (
          <div key={item.title} className={s.item}>
            <button
              type="button"
              className={s.header}
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
            >
              <span className={s.title}>{item.title}</span>
              <span
                className={s.arrow}
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                }}
              >
                <PixelChevronDown size={24} />
              </span>
            </button>
            <div
              ref={(el) => {
                contentRefs.current[i] = el;
              }}
              className={s.body}
              style={{
                maxHeight: isOpen ? `${scrollH}px` : "0",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <p className={s.desc}>{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
