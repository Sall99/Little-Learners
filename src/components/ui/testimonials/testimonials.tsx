"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import { Heading, Rating, Typography } from "@/components";
import { testimonialsData } from "@/constants";
import "./index.css";
import { MoveLeft, MoveRight } from "lucide-react";

interface CardProps {
  name: string;
  rating: number;
  testimonial: string;
  avatar: string;
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <MoveRight />,
  prevArrow: <MoveLeft />,
  autoplay: true,
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

const Card = ({ name, rating, testimonial, avatar }: CardProps) => {
  return (
    <div className="w-_340 h-_374 2xl:w-_425 2xl:h-_462 m-auto flex flex-col items-center rounded-xl border border-b-8 border-r-8 border-gray-700 bg-white p-5 2xl:p-_50">
      <div className="mb-3 flex items-center justify-center rounded-full border border-gray-700 bg-primary-300 p-2">
        <div className="relative h-11 w-11 2xl:h-14 2xl:w-14">
          <Image src={avatar} alt={name} fill />
        </div>
      </div>
      <Typography variant="h2" headingSize="sm" className="mb-6 2xl:mb-_30">
        {name}
      </Typography>
      <Rating rating={rating} className="mb-6 2xl:mb-_30" />
      <Typography variant="p" paragraphSize="sm" className="text-center">
        {testimonial}
      </Typography>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="mb-_150 px-4 lg:px-_50">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Their Happy Words 🤗"
          title=" Our Testimonials"
          description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
        />

        <div className="2xl:px-_108 mt-_100 min-[600px]:px-_88">
          <Slider {...settings}>
            {testimonialsData.map(
              ({ name, rating, testimonial, avatar }, key) => (
                <Card
                  key={key}
                  name={name}
                  rating={rating}
                  testimonial={testimonial}
                  avatar={avatar}
                />
              ),
            )}
          </Slider>
        </div>
      </div>
    </section>
  );
};
