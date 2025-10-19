import React from "react";

export const HeaderSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-center w-full mt-40 overflow-hidden">
      <div className="flex items-center gap-0">
        <div className="text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
          evolve build.ing
        </div>

        <div className="text-[180px] text-center tracking-[0] leading-[normal] whitespace-nowrap [font-family:'Space_Grotesk',Helvetica] font-medium text-white opacity-50">
          evolve build.ing
        </div>
      </div>
    </header>
  );
};
