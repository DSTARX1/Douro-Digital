import Accordion from "./Accordion";
import { services } from "@/data/services";

export default function ServiceAccordion() {
  return <Accordion items={services} />;
}
