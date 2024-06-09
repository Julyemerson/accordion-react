import { faqs } from "../assets/data/questions";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion() {
  const [currentOpen, setCurrentOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((el, index) => (
        <AccordionItem
          key={el.title}
          num={index + 1}
          title={el.title}
          currentOpen={currentOpen}
          onOpen={setCurrentOpen}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}
