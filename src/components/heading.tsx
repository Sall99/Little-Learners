import React from "react";
import { Button } from "./button";
import Typography from "./typography";

interface HeadingProps {
  bntText: string;
  title: string;
  description: string;
}

export const Heading = ({ bntText, title, description }: HeadingProps) => {
  return (
    <div className="m-auto mb-_50 flex flex-col items-center justify-center gap-5 text-center lg:mb-20 lg:w-_992 2xl:mt-_100">
      <Button size="sm">{bntText}</Button>
      <Typography variant="h2" className="font-medium">
        {title}
      </Typography>
      <Typography variant="p">{description}</Typography>
    </div>
  );
};
