import React from "react";

import { Heading, Typography } from "@/components";
import { teachers } from "@/constants";
import Image from "next/image";

interface CardProps {
  name: string;
  img: string;
  qualification: string;
  description: string;
}

const Card = ({ name, img, qualification, description }: CardProps) => {
  return (
    <div className="lg-box-shadow rounded-xl border-2 border-gray-700 bg-white p-_30 lg:p-10 2xl:p-_50">
      <div>
        <div className="flex items-center justify-between gap-_10">
          <div className="flex gap-_10">
            <div className="relative h-_60 w-_60 2xl:h-14 2xl:w-14">
              <Image src={`/assets/img/${img}`} alt={name} fill />
            </div>
            <Typography variant="h2" headingSize="sm" className="font-semibold">
              {name}
            </Typography>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-gray-700 bg-primary-400 p-2">
            <div className="relative h-_14 w-5">
              <Image src={`/assets/img/mail.png`} alt="mail-icon" fill />
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border-2 border-gray-700 bg-primary-300 p-5">
          <Typography variant="h2" headingSize="sm">
            {qualification}
          </Typography>

          <Typography variant="p" headingSize="sm">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export const TeamMembers = () => {
  return (
    <section className="layout awards-recognitions">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Our Teachers With Experties"
          title="Our Team Members"
          description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 2xl:gap-_50">
          {teachers.map(({ name, img, qualification, description }, key) => (
            <Card
              key={key}
              name={name}
              img={img}
              qualification={qualification}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
