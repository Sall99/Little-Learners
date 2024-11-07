import { Activities, Overview, StudentSupport } from "@/components";
import React from "react";

const StudentLife = () => {
  return (
    <>
      <Overview
        buttonText="Enriching Student Life"
        title={"Embracing Learning with Discovery and Joy"}
        description={
          "Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."
        }
      />
      <Activities />
      <StudentSupport />
    </>
  );
};

export default StudentLife;
