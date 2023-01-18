import React from "react";

const skills = [
  "Git/Github",
  "CI/CD",
  "Javascript/Typescript",
  "ReactJS/NextJS",
  "TailwindCSS",
  "Material-UI",
  "HTML",
  "CSS/SASS",
  "RestAPI",
  "Prisma",
];

const About = () => {
  return (
    <div className="mx-auto h-screen w-3/5 pt-36" id="about">
      <div className="relative max-w-max">
        <p className="md:text-5xl">about</p>
        <div className="absolute left-[-0.5rem] bottom-1 -z-10 h-2 w-56 rounded-sm bg-[#0077FF]"></div>
      </div>
      <p className="mt-10 w-3/5 text-lg">
        As a purposeful and highly motivated person I am looking for a company
        that will give me a chance to apply my skills and develop myself as a
        Front-End Developer
      </p>
      <div className="relative mt-16 max-w-max">
        <p className="md:text-5xl">skills</p>
        <div className="absolute left-[-0.5rem] bottom-1 -z-10 h-2 w-56 rounded-sm bg-[#0077FF]"></div>
      </div>
      <div className="mt-6 grid grid-cols-4 justify-between gap-y-2 gap-x-20 px-1">
        {React.Children.toArray(
          skills.map((skill) => (
            <div className="relative">
              <p className="text-base">{skill}</p>
              <div className="absolute left-[-3px] top-1 -z-10 h-4 w-4 rounded-sm bg-[#0077FF]"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About;
