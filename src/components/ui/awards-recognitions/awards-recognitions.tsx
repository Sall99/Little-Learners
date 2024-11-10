"use client";

import Image from "next/image";
import React from "react";
import { MoveLeft, MoveRight } from "lucide-react";

import { Heading, Typography } from "@/components";
import Slider from "react-slick";
import { awardsCard } from "@/constants";
import "./index.css";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const settings = {
  dots: false,
  //   infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <MoveRight />,
  prevArrow: <MoveLeft />,
  //   autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 1335,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Card = ({ title, description, icon }: CardProps) => {
  return (
    <div className="lg-box-shadow relative m-auto mt-_30 flex h-_374 w-_340 flex-col items-center rounded-xl border border-gray-700 bg-white p-5 px-_30 pt-_50 2xl:h-_462 2xl:w-_425 2xl:p-_50">
      <div className="absolute -top-6 left-4 flex items-center justify-center rounded-xl border-2 border-gray-700 bg-primary-400 p-2 xl:h-14 xl:w-14 2xl:h-_74 2xl:w-_74">
        <div className="relative h-7 w-7 2xl:h-14 2xl:w-14">
          <Image src={`/assets/img/${icon}`} alt={title} fill />
        </div>
      </div>
      <Typography
        variant="h2"
        headingSize="sm"
        className="mb-6 text-start 2xl:mb-_30"
      >
        {title}
      </Typography>

      <Typography variant="p" paragraphSize="sm" className="text-start">
        {description}
      </Typography>
    </div>
  );
};

export const AwardsRecognitions = () => {
  return (
    <section className="layout awards-recognitions">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Our Achievements"
          title="Our Awards and Recognitions"
          description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
        />

        <div className="min-[600px]:px-_88 2xl:px-_108">
          <Slider {...settings}>
            {awardsCard.map(({ title, description, icon }, key) => (
              <Card
                key={key}
                title={title}
                description={description}
                icon={icon}
              />
            ))}
          </Slider>
          <Typography
            variant="p"
            paragraphSize="sm"
            className="ml-4 mt-10 font-medium"
          >
            {awardsCard.length} more awards
          </Typography>
        </div>
      </div>
    </section>
  );
};
