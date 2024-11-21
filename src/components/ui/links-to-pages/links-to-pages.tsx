"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button, Heading, Typography } from "@/components";
import { linksToOthersPages } from "@/constants";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Card = ({ title, description, link }: CardProps) => {
  const router = useRouter();

  return (
    <motion.div
      className="m-auto flex flex-col items-center justify-between rounded-lg border-2 border-gray-700 bg-white p-10 md:h-_467 md:w-_620 lg:p-_60 2xl:h-_588 2xl:w-_773 2xl:p-20"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Typography variant="h2" className="font-medium" headingSize="md">
        {title}
      </Typography>

      <div className="relative mb-10 mt-6 h-5 w-full md:w-_500 2xl:mb-_50 2xl:mt-_30 2xl:w-_615">
        <Image src="/assets/img/line.png" alt={"line"} fill />
      </div>

      <Typography variant="p" paragraphSize="sm" className="text-center">
        {description}
      </Typography>

      <Button
        variant="secondary"
        className="mt-10 md:mt-_60"
        onClick={() => router.push(link)}
      >
        Learn More
      </Button>
    </motion.div>
  );
};

export const LinksToPages = () => {
  return (
    <section className="mb-10 px-4 lg:mb-_150 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Explore More"
          title="Navigate through our Pages"
          description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
        />
        <div className="grid grid-cols-1 gap-10 min-[1300px]:grid-cols-2 2xl:gap-_50">
          {linksToOthersPages.map(({ title, description, link }, key) => (
            <Card
              key={key}
              title={title}
              description={description}
              link={link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
