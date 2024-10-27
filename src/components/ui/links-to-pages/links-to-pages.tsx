"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Button, Heading, Typography } from "@/components";
import { linksToOthersPages } from "@/constants";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  link: string;
}

const Card = ({ title, description, link }: CardProps) => {
  const router = useRouter();
  return (
    <div className="m-auto flex flex-col items-center rounded-lg border-2 border-gray-700 bg-white p-10 md:h-_467 md:w-_620 lg:p-_60 2xl:h-_588 2xl:w-_773 2xl:p-20">
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
    </div>
  );
};

export const LinksToPages = () => {
  return (
    <section className="mb-_150 px-4 lg:px-_50">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Solutions For The Doubts"
          title="Frequently Asked Questions"
          description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        />
        <div className="mt-_100 grid grid-cols-1 gap-10 min-[1300px]:grid-cols-2 2xl:gap-_50">
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
