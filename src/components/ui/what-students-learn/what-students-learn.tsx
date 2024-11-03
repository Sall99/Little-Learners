import React from "react";

import { Heading, Typography } from "@/components";
import { subjects } from "@/constants";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  img: string;
}

const Card = ({ title, description, img }: CardProps) => {
  return (
    <div className="lg-box-shadow min-[400px]:w-_358 relative m-auto rounded-xl border-2 border-gray-700 bg-white p-_30 sm:h-_433 lg:w-_400 lg:p-10 2xl:h-_570 2xl:w-_498 2xl:p-_50">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 transform">
        <div className="w-_93 h-_237 relative lg:h-_283 lg:w-_125 2xl:h-_384">
          <Image src="/assets/img/shape.png" alt="Shape" fill />
        </div>
      </div>
      <div className="min-[400px]:w-_298 w-_277 h-_191 relative md:h-_220 md:w-_320 2xl:h-_304 2xl:w-_400">
        <Image src={img} alt={title} fill />
      </div>

      <div className="mt-_50 text-center">
        <Typography variant="h2" headingSize="sm" className="font-semibold">
          {title}
        </Typography>
        <Typography variant="p">{description}</Typography>
      </div>
    </div>
  );
};

export const WhatStudentsLearn = () => {
  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Our Features"
          title="Our Special Features"
          description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
        />
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-_50">
          {subjects.map(({ title, description, img }, key) => (
            <Card key={key} title={title} description={description} img={img} />
          ))}
        </div>
      </div>
    </section>
  );
};
