import React from "react";

const skills = [
  "HTML",
  "CSS/SASS",
  "Javascript",
  "Typescript",
  "ReactJS",
  "NextJS",
  "RestAPI",
  "Prisma",
  "MaterialUI",
  "TailwindCSS",
  "Git/Github",
  "CI/CD",
];

const About = React.forwardRef<HTMLDivElement>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div className="mx-auto h-screen w-3/5 pt-36" id="about">
        <div ref={ref}>
          <div className="relative max-w-max">
            <p className="text-lg font-medium md:text-5xl">about</p>
            <div className="absolute bottom-1 -z-10 h-1 w-[130%] bg-[#0077FF] md:left-[-0.5rem] md:h-2 md:rounded-sm"></div>
          </div>
          <p className="mt-10 text-lg md:w-3/5">
            As a purposeful and highly motivated person I am looking for a
            company that will give me a chance to apply my skills and develop
            myself as a Front-End Developer
          </p>
          <div className="relative mt-16 max-w-max">
            <p className="text-lg font-medium md:text-5xl">skills</p>
            <div className="absolute bottom-1 -z-10 h-1 w-[130%] bg-[#0077FF] md:left-[-0.5rem] md:h-2 md:rounded-sm"></div>
          </div>
          <div className="mt-6 grid grid-cols-2 justify-between gap-x-20 gap-y-2 px-1 md:grid-cols-4">
            {React.Children.toArray(
              skills.map((skill) => (
                <div className="relative">
                  <p className="text-sm lg:text-base">{skill}</p>
                  <div className="absolute left-[-3px] top-1 -z-10 h-4 w-4 rounded-sm bg-[#0077FF]"></div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
);
About.displayName = "About";

export default About;
