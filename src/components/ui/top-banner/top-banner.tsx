import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

import { Typography } from "@/components";

export const TopBanner = () => {
  return (
    <div className="px-4 lg:px-_50">
      <div className="relative m-auto mt-_18 overflow-hidden rounded-md border-2 border-gray-800 bg-primary-400 py-_14 text-center 2xl:max-w-_1819">
        <div className="flex items-center justify-center gap-_10">
          <Typography variant="p" paragraphSize="sm">
            Admission is Open, Grab your seat now
          </Typography>
          <ArrowRight />
        </div>

        <div className="absolute left-7 top-0 -translate-x-1/2 -translate-y-1/2 transform lg:left-1/4 lg:top-1/4">
          <div className="relative h-_50 w-_50 xl:h-_72 xl:w-_72">
            <Image src="/assets/img/sphere.png" alt="sphere" fill />
          </div>
        </div>

        <div className="absolute -bottom-_50 -right-10 -translate-x-1/2 -translate-y-1/2 transform lg:right-1/4 xl:-bottom-1/2">
          <div className="relative h-_50 w-_50 xl:h-10 xl:w-10">
            <Image src="/assets/img/sphere.png" alt="sphere" fill />
          </div>
        </div>
      </div>
    </div>
  );
};
