import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";

const faqData = [
  {
    id: "item-1",
    question: "What are the rewards systems?",
    answer:
      "After completing every course you will get some points, and that points will be converted into various rewards like real cash, Gift cards, T-shirt, watches, exciting merchandise and many more.",
  },
  {
    id: "item-2",
    question: "Why should school students join our platform?",
    answer: "",
  },
  {
    id: "item-3",
    question:
      "Do I need prior experience in startup or entrepreneurship to join the platform?",
    answer: "",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="w-full relative mt-[200px] px-4">
      <div className="max-w-[1248px] mx-auto">
        <div className="text-center mb-[70px]">
          <div className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-sm tracking-[2.80px] leading-[22.4px] whitespace-nowrap mb-[70px]">
            FREQUENTLY ASKED QUESTIONS
          </div>

          <div className="relative inline-block">
            <h2 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-[64px] tracking-[0] leading-[78px]">
              Got Questions? Get Answers
            </h2>
            <Badge className="inline-flex items-center justify-center gap-2.5 px-[26px] py-6 absolute top-[46px] -right-[140px] bg-red rounded-2xl -rotate-6 border-0 h-auto">
              <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                Simple and easy
              </span>
            </Badge>
          </div>
        </div>

        <div className="mt-[139px]">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-1"
            className="w-full"
          >
            {faqData.map((faq, index) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none"
              >
                <div className="relative">
                  {index > 0 && (
                    <div className="absolute top-0 left-0 w-full h-px bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_55%,rgba(255,255,255,0)_100%)] opacity-30" />
                  )}
                  <AccordionTrigger className="py-10 hover:no-underline [&[data-state=open]>svg]:rotate-0">
                    <span className="text-left [font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-[normal]">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10">
                    {faq.answer && (
                      <div className="w-[597px] opacity-60 font-normal text-sm leading-[22.4px] [font-family:'Space_Grotesk',Helvetica] text-[#ffffff] tracking-[0]">
                        {faq.answer}
                      </div>
                    )}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
