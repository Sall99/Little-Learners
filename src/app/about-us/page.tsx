import React from "react";

import {
  AwardsRecognitions,
  History,
  OurMissions,
  Overview,
  TeamMembers,
} from "@/components";

const AboutPage = () => {
  return (
    <>
      <Overview
        title={"Welcome to Little Learners Academy"}
        description={
          "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
        }
      />
      <OurMissions />
      <AwardsRecognitions />
      <History />
      <TeamMembers />
    </>
  );
};

export default AboutPage;
