import React from "react";

import clsx from "clsx";

type HeadingVariant = "lg" | "md" | "sm";
type ParagraphVariant = "md" | "sm";
type FontType = "primary" | "secondary";

type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
  className?: string;
  headingSize?: HeadingVariant;
  paragraphSize?: ParagraphVariant;
  font?: FontType;
};

const headingSizes: Record<HeadingVariant, string> = {
  lg: "text-[38px] md:text-[48px] lg:text-[54px]",
  md: "text-[22px] md:text-[24px]",
  sm: "text-[22px]",
};

const paragraphSizes: Record<ParagraphVariant, string> = {
  md: "text-[14px] md:text-[16px] lg:text-[20px]",
  sm: "text-[16px] 2xl:text-[20px]",
};

const fontType: Record<FontType, string> = {
  primary: "font-outfit",
  secondary: "font-raleway",
};

export const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  headingSize = "lg",
  paragraphSize = "md",
  font = "primary",
}) => {
  const isHeading = variant !== "p";
  const sizeClass = isHeading
    ? headingSizes[headingSize]
    : paragraphSizes[paragraphSize];
  const isFont = fontType[font];

  const classes = clsx(isFont, sizeClass, className);

  const Component = variant;

  return <Component className={classes}>{children}</Component>;
};

export default Typography;
