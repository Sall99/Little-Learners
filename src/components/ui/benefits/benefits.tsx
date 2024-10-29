import React from "react";
import { Heading, Typography } from "@/components";
import { benefitsFeatures } from "@/constants";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="lg-box-shadow relative h-_243 rounded-xl border-2 border-gray-700 bg-white px-_30 pt-_50 lg:px-10 lg:pt-_60 2xl:h-_306 2xl:w-_504 2xl:border-b-8 2xl:border-r-8 2xl:px-_50 2xl:pt-20">
      <div className="absolute -top-8 flex h-14 w-14 items-center justify-center rounded-md border-2 border-gray-700 bg-primary-500 2xl:-top-11 2xl:h-_74 2xl:w-_74">
        <div className="relative h-6 w-6 2xl:h-_34 2xl:w-_34">
          <Image src={`/assets/img/${icon}`} alt={title} fill />
        </div>
      </div>
      <Typography
        variant="h2"
        headingSize="md"
        className="mb-4 font-bold 2xl:mb-5"
      >
        {title}
      </Typography>
      <Typography variant="p" paragraphSize="sm">
        {description}
      </Typography>
    </div>
  );
};

export const Benefits = () => {
  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Children Deserve Bright Future"
          title="Our Benefits"
          description="With a dedicated team of experienced educators, state-of-the-art
          facilities, and a comprehensive curriculum, we aim to lay a strong
          foundation for your child s future."
        />
        <div>
          <ul className="grid grid-cols-1 gap-10 gap-y-_76 lg:grid-cols-2 min-[1350px]:grid-cols-3">
            {benefitsFeatures.map(({ title, description, icon }, key) => (
              <li key={key}>
                <Card title={title} description={description} icon={icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
