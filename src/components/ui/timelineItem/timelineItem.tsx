import React from "react";
import Image from "next/image";
import { Typography } from "@/components";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
}) => {
  return (
    <div className="relative flex gap-6">
      <div className="flex-1 pb-16">
        <div className="flex flex-col rounded-xl lg:flex-row lg:gap-_50">
          <div className="lg-box-shadow relative mb-4 flex items-center gap-3 rounded-xl border-2 border-gray-700 p-5 px-_50 py-_30 xl:h-_146 xl:w-_364">
            <div className="absolute -left-1 top-1/2 z-20 -translate-y-1/2 transform">
              <div className="relative -left-20 h-_22 w-_95">
                <Image src="/assets/img/horizontal-line.png" fill alt="Logo" />
              </div>
            </div>
            <div className="relative h-_88 w-_88">
              <Image src="/assets/img/carre-design.png" fill alt="Logo" />
            </div>
            <Typography
              variant="h2"
              className="mt-2 font-bold"
              font="secondary"
            >
              {year}
            </Typography>
          </div>

          <div>
            <Typography
              variant="h2"
              headingSize="sm"
              className="mb-5 font-semibold"
            >
              {title}
            </Typography>
            <Typography
              variant="p"
              paragraphSize="sm"
              className="leading-relaxed text-gray-600"
            >
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};
