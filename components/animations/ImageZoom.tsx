import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function ImageZoom({ children, className, style }: Props) {
  return (
    <div className={className} style={{ overflow: "hidden", ...style }}>
      {children}
    </div>
  );
}
