"use client";
import React from "react";
import { Heading, Tabs } from "@/components";
import {
  classrooms,
  librairies,
  scienceLabs,
  computerLabs,
  gardenandNatureArea,
} from "@/constants";

const categories = [
  {
    name: "Classrooms",
    content: classrooms,
  },
  {
    name: "Library",
    content: librairies,
  },
  {
    name: "Science Lab",
    content: scienceLabs,
  },
  {
    name: "Computer Lab",
    content: computerLabs,
  },
  {
    name: "Garden and Nature Area",
    content: gardenandNatureArea,
  },
];

export const Gallery = () => {
  return (
    <section className="layout awards-recognitions mb-10 px-4 lg:mb-_150 lg:mt-_60 lg:px-_50 2xl:mb-_200">
      <div className="m-auto max-w-_1590">
        <Heading
          bntText="Our Gallery"
          title="Our Rooms Gallery"
          description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
        />
        <div>
          <Tabs categories={categories} />
        </div>
      </div>
    </section>
  );
};
