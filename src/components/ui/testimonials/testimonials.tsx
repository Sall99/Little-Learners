"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import { MoveLeft, MoveRight } from "lucide-react";

import { Heading, Rating, Typography } from "@/components";
import { testimonialsData } from "@/constants";
import "./index.css";

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="lg-box-shadow m-auto flex h-_374 w-_340 flex-col items-center rounded-xl border border-gray-700 bg-white p-5 2xl:h-_462 2xl:w-_425 2xl:p-_50"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        className="mb-3 flex items-center justify-center rounded-full border border-gray-700 bg-primary-300 p-2"
      >
        <motion.div
          className="relative h-11 w-11 2xl:h-14 2xl:w-14"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <Image src={avatar} alt={name} fill />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <Typography variant="h2" headingSize="sm" className="mb-6 2xl:mb-_30">
          {name}
        </Typography>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mb-6 2xl:mb-_30"
      >
        <Rating rating={rating} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <Typography variant="p" paragraphSize="sm" className="text-center">
          {testimonial}
        </Typography>
      </motion.div>
    </motion.div>
  );
};

export const Testimonials = () => {
  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="testimonials-container mb-_150 px-4 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headingVariants}
        >
          <Heading
            bntText="Their Happy Words 🤗"
            title=" Our Testimonials"
            description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
          />
        </motion.div>

        <motion.div
          className="min-[600px]:px-_88 2xl:px-_108"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};
