import React from "react";
import Image from "next/image";

import { Heading, Typography } from "@/components";
import { OurMissionCards } from "@/constants";

interface CardProps {
  icon: string;
  title: string;
  description: string;
  w: number;
  h: number;
}

const Card = ({ icon, title, description, w, h }: CardProps) => {
  return (
    <div className="lg-box-shadow rounded-xl border-2 border-gray-700 p-10 2xl:p-_60">
      <Typography
        variant="h2"
        className="mb-10 flex items-center justify-between lg:gap-_50 2xl:mb-_60"
      >
        <span>{title}</span>
        <div className="relative" style={{ width: `${w}px`, height: `${h}px` }}>
          <Image src={`/assets/img/${icon}`} fill alt="" />
        </div>
      </Typography>

      <Typography variant="p">{description}</Typography>
    </div>
  );
};

export const OurMissions = () => {
  return (
    <section className="layout">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText={"Mission & Visions"}
          title={"Our Mission & Visions"}
          description={
            "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
          }
        />

        <div className="grid grid-cols-1 gap-_30 md:grid-cols-2 2xl:gap-_60">
          {OurMissionCards.map(({ title, description, icon, w, h }, key) => (
            <Card
              key={key}
              title={title}
              description={description}
              icon={icon}
              w={w}
              h={h}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
