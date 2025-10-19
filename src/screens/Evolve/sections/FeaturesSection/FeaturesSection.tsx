import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const audienceSegments = [
  {
    title: "Young Students 3-12 (School Level)",
    description:
      "Introduce technical and entrepreneurial skills early—learn AI, coding, problem-solving, and startup building. Prepare for future entrepreneurship, because the sooner you plant, the faster your dreams sprout.",
    subtitle: "Elevate Your Personal Skills",
    image: "/image-2.svg",
    expanded: true,
  },
  {
    title: "Mentors & Educators",
    description: "",
    subtitle: "",
    image: "",
    expanded: false,
  },
  {
    title: "Investors & Business-Minded Individuals",
    description: "",
    subtitle: "",
    image: "",
    expanded: false,
  },
  {
    title: "College Students & Aspiring Entrepreneurs",
    description: "",
    subtitle: "",
    image: "",
    expanded: false,
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="w-full flex justify-center mt-[120px]">
      <div className="w-full max-w-[1320px] px-4">
        <Card className="bg-[#141414] rounded-[20px] border-0">
          <CardContent className="p-0">
            <div className="relative px-[60px] py-[95px]">
              <div className="mb-[70px]">
                <p className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-sm tracking-[2.80px] leading-[22.4px] mb-[70px]">
                  WHO THIS PLATFORM IS FOR
                </p>

                <div className="relative">
                  <h2 className="text-[64px] tracking-[0] leading-[78px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white max-w-[911px]">
                    Built for Learners, Innovators, and Future Founders
                  </h2>

                  <Badge className="absolute top-[46px] left-[603px] bg-yellow text-black hover:bg-yellow px-[26px] py-6 rounded-2xl rotate-6 h-auto">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-base tracking-[0] leading-[25.6px] whitespace-nowrap">
                      No stone unturned
                    </span>
                  </Badge>
                </div>
              </div>

              <div className="space-y-0">
                {audienceSegments.map((segment, index) => (
                  <div key={index}>
                    {index > 0 && <Separator className="bg-white/10 h-px" />}

                    <div className="py-[47px] relative">
                      <div className="flex items-start justify-between gap-8">
                        <h3 className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[normal] max-w-[184px]">
                          {segment.title}
                        </h3>

                        {segment.expanded && (
                          <>
                            <div className="flex flex-col gap-[72px] w-[360px]">
                              <p className="font-normal text-base leading-[25.6px] [font-family:'Space_Grotesk',Helvetica] text-white tracking-[0]">
                                {segment.description}
                              </p>

                              <p className="opacity-60 text-xl tracking-[0] leading-[48.0px] [font-family:'Space_Grotesk',Helvetica] font-medium text-white">
                                {segment.subtitle}
                              </p>

                              <Button
                                variant="outline"
                                className="inline-flex items-center justify-center gap-4 pl-6 pr-4 py-[15px] bg-[#141414] rounded-lg border-white text-white hover:bg-white/10 hover:text-white w-fit h-auto"
                              >
                                <span className="[font-family:'Manrope',Helvetica] font-medium text-sm text-center tracking-[0] leading-[22.4px] whitespace-nowrap">
                                  Contact
                                </span>
                                <img
                                  className="w-6 h-6"
                                  alt="Arrow downward alt"
                                  src="/arrow-downward-alt.png"
                                />
                              </Button>
                            </div>

                            <img
                              className="w-[400px] h-[520px] object-cover"
                              alt="Young students learning"
                              src={segment.image}
                            />
                          </>
                        )}

                        <button
                          className="w-[60px] h-[60px] bg-white rounded-[30px] flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-colors"
                          aria-label={`Expand ${segment.title}`}
                        >
                          <img
                            className="w-6 h-6"
                            alt="Arrow left alt"
                            src={
                              index === 0
                                ? "/arrow-left-alt.png"
                                : index === 1
                                  ? "/arrow-left-alt-1.png"
                                  : index === 2
                                    ? "/arrow-left-alt-2.png"
                                    : "/arrow-left-alt-3.png"
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
