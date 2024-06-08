import { faqs } from "../assets/data/questions";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((el, index) => (
        <AccordionItem
          key={el.title}
          num={index + 1}
          title={el.title}
          text={el.text}
        />
      ))}
    </div>
  );
}
