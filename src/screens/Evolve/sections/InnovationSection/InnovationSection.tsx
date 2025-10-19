import React from "react";
import { Button } from "../../../../components/ui/button";

export const InnovationSection = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center gap-[60px] mt-[200px] px-4">
      <div className="relative flex flex-col items-center max-w-[821px]">
        <h1 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[64px] text-center tracking-[0] leading-[78px]">
          Your journey from learner
          to&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;founder starts here
        </h1>
        <img
          className="absolute top-[68px] left-1/2 -translate-x-1/2 translate-x-[202px] w-[68px] h-[68px]"
          alt="Icon container"
          src="/icon-container-1.svg"
        />
      </div>

      <Button className="h-auto inline-flex items-center justify-center gap-5 pl-[46px] pr-5 py-5 bg-white hover:bg-white/90 rounded-[18px] text-black">
        <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
          Join the waitlist
        </span>
        <img
          className="w-[43px] h-[43px]"
          alt="Arrow downward alt"
          src="/arrow-downward-alt-4.png"
        />
      </Button>
    </section>
  );
};
