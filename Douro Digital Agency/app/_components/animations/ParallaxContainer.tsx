import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function ParallaxContainer({ children, className, style }: Props) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
