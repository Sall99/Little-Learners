import Image from "next/image";
import React from "react";

import { Typography } from "@/components";
import { HeroStats } from "@/constants";

export const HeroSection = () => {
  return (
    <section className="2xl:mb-_200 lg:mb-_150 mb-10 mt-_50 px-4 lg:mt-_60 lg:px-_50 2xl:mt-20">
      <div className="m-auto flex max-w-_1590 flex-col gap-10 lg:gap-_50 xl:flex-row 2xl:gap-_60">
        <div className="flex-1">
          <div className="relative mx-auto aspect-square w-full max-w-2xl md:aspect-[15/16] 2xl:aspect-[15/16]">
            <Image
              src="/assets/img/hero-section.png"
              alt="sphere"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw,
                 (max-width: 1536px) 50vw,
                 33vw"
              priority
            />
          </div>
        </div>
        <div className="m-auto flex flex-1 flex-col justify-center md:w-_615 xl:w-full">
          <Typography
            variant="p"
            className="text-gray-700 underline underline-offset-8"
          >
            Welcome to Little Learners Academy
          </Typography>

          <Typography variant="h2" font="secondary" className="font-bold">
            Where Young Minds Blossom and
            <span className="text-primary-800"> Dreams Take Flight.</span>
          </Typography>

          <Typography variant="p" className="mt-5 text-gray-700">
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </Typography>

          <div className="relative">
            <div className="mt-_60 rounded-lg border-2 border-gray-700 bg-primary-300 px-10 py-6 2xl:p-_50">
              <ul className="flex flex-col items-center gap-5 xl:flex-row">
                {HeroStats.map(({ title, number }, key) => (
                  <li
                    key={key}
                    className="w-full border-b-2 border-gray-700 text-center"
                  >
                    <Typography variant="h2" className="font-bold">
                      +{number}
                    </Typography>
                    <Typography variant="p" paragraphSize="sm">
                      {title}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="h-_141 absolute -right-_10 top-_76 -z-10 w-full rounded-lg bg-primary-500 2xl:top-24"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
