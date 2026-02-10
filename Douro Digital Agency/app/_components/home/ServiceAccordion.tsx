import Accordion from "./Accordion";
import { services } from "@/app/_data/services";

export default function ServiceAccordion() {
  return <Accordion items={services} />;
}
