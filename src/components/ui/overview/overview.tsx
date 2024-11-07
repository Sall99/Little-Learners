import React from "react";

import { Button, Typography } from "@/components";
import Image from "next/image";

interface OverviewProps {
  title: string;
  description: string;
  buttonText?: string;
}
export const Overview = ({
  title,
  description,
  buttonText = "Overview",
}: OverviewProps) => {
  return (
    <section className="layout">
      <div className="lg-box-shadow relative m-auto max-w-_1819 rounded-xl border-2 border-gray-700 p-_50 px-_30 md:px-20 lg:py-40 2xl:px-_120 2xl:py-_150">
        <div className="absolute left-0 top-0">
          <div className="relative h-_100 w-_100 lg:h-_137 lg:w-_137 2xl:h-_200 2xl:w-_200">
            <Image src={`/assets/img/abstract-design.png`} alt={title} fill />
          </div>
        </div>
        <div className="flex flex-col gap-5 text-center md:gap-_50 lg:flex-row lg:text-start">
          <div className="flex-1">
            <Button size="sm">{buttonText}</Button>
            <Typography variant="h2" headingSize="lg" className="font-medium">
              {title}
            </Typography>
          </div>
          <div className="flex-1">
            <Typography variant="p" headingSize="lg">
              {description}
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};
