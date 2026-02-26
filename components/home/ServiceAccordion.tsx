import { services } from "@/data/services";
import Accordion from "./Accordion";

export default function ServiceAccordion() {
  return <Accordion items={services} />;
}
