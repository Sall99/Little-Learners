import React from "react";

import { Heading, Typography } from "@/components";
import Image from "next/image";
import { eventsData } from "@/constants";

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="lg-box-shadow relative m-auto rounded-xl border-2 border-gray-700 bg-white p-_30 min-[400px]:w-_358 sm:h-_467 lg:w-_400 lg:p-10 2xl:h-_570 2xl:w-_498 2xl:p-_50">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 transform">
        <div className="relative hidden h-_237 w-_93 sm:block lg:h-_283 lg:w-_125 2xl:h-_384">
          <Image src="/assets/img/shape.png" alt="Shape" fill />
        </div>
      </div>
      <div className="relative h-_191 w-_277 min-[400px]:w-_298 md:h-_220 md:w-_320 2xl:h-_304 2xl:w-_400">
        <Image src={image} alt={title} fill />
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

export function EventsCelebration() {
  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Our Achievements"
          title="Student Support"
          description="At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
        />
        <div>
          <ul className="grid grid-cols-1 gap-10 gap-y-_76 lg:grid-cols-2 min-[1350px]:grid-cols-3">
            {eventsData.map(({ title, description, image }, key) => (
              <li key={key}>
                <Card title={title} description={description} image={image} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
