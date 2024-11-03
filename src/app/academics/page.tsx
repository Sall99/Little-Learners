import { Features, Overview, WhatStudentsLearn } from "@/components";
import React from "react";

const AcademicsPage = () => {
  return (
    <>
      <Overview
        title={"Nurturing Young Minds for Success"}
        description={
          "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
        }
      />
      <Features />
      <WhatStudentsLearn />
    </>
  );
};

export default AcademicsPage;
