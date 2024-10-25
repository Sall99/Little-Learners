import clsx from "clsx";
import { Star } from "lucide-react";
import React from "react";

interface RatingProps {
  rating: number;
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({ rating, className }) => {
  return (
    <div className={clsx("flex gap-2", className)}>
      {[...Array(rating)].map((_, index) => (
        <Star key={index} color="#FF8D4D" fill="#FF8D4D" />
      ))}
    </div>
  );
};
