interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  delay?: number;
}

export default function TextReveal({ text, className, as: Tag = "p" }: Props) {
  return <Tag className={className}>{text}</Tag>;
}
