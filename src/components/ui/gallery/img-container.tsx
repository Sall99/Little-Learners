"use client";
import React from "react";
import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import Slider from "react-slick";

import "./index.css";
import { Typography } from "@/components";

interface ImagContainerProps {
  content: {
    title: string;
    description: string;
    images: string[];
  };
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: <MoveRight />,
  prevArrow: <MoveLeft />,
  // autoplay: true,
  autoplaySpeed: 5000,
  cssEase: "linear",
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 1515,
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

export const ImgContainer = ({ content }: ImagContainerProps) => {
  return (
    <div className="lg-box-shadow img-container relative mt-44 rounded-xl border-2 border-gray-700 px-_30 pb-_50 pt-_137 md:px-_50 lg:mt-64 2xl:mt-_304 2xl:pt-_177">
      <div className="flex items-center justify-center">
        <div className="absolute -top-[40%]">
          <Slider {...settings}>
            {content.images.map((img, key) => (
              <div key={key}>
                <div className="relative m-auto h-_200 w-_270 lg:h-_234 2xl:h-_304 2xl:w-_344">
                  <Image src={img} alt="Shape" fill />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <Typography variant="h2" paragraphSize="md" className="mt-10">
        {content.title}
      </Typography>
      <Typography variant="p">{content.description}</Typography>
    </div>
  );
};
