import React from "react";
import Modal from "./Modal";

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

interface AboutProps {
  mobile: boolean;
  isLandscape: boolean;
}

const About = React.forwardRef<HTMLDivElement, AboutProps>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    const landscapeMode = props.mobile && props.isLandscape;

    return (
      <div
        className={`mx-auto ${
          props.mobile && props.isLandscape ? "" : "h-screen"
        } w-3/5 pt-20 md:pt-36 2xl:pt-72`}
        id="about"
      >
        <div ref={ref}>
          <div className="relative max-w-max">
            <p className="text-xl font-medium md:text-5xl 2xl:text-7xl">
              about
            </p>
            <div className="absolute bottom-1 -z-10 h-1 w-[130%] bg-[#0077FF] md:left-[-0.5rem] md:h-2 md:rounded-sm"></div>
          </div>
          <p className="mt-5 md:mt-10 md:w-3/5 md:text-lg 2xl:text-2xl">
            I&apos;m a self-taught Front-End developer who began my journey in
            January 2022 with JavaScript. I quickly moved on to React and later,
            TypeScript and Next.js to build efficient, scalable web apps. Now
            I&apos;m well-equipped to build modern web applications.
          </p>
          <Modal />
          <div className="relative mt-5 max-w-max md:mt-16">
            <p className="text-xl font-medium md:text-5xl 2xl:text-7xl">
              skills
            </p>
            <div className="absolute bottom-1 -z-10 h-1 w-[130%] bg-[#0077FF] md:left-[-0.5rem] md:h-2 md:rounded-sm"></div>
          </div>
          <div
            className={`mt-6 grid ${
              landscapeMode ? "grid-cols-4" : "grid-cols-2"
            } justify-between gap-x-20 gap-y-2 px-1 md:grid-cols-4 2xl:mt-10`}
          >
            {React.Children.toArray(
              skills.map((skill) => (
                <div className="relative">
                  <p className="text-sm 2xl:text-2xl">{skill}</p>
                  <div className="absolute left-[-3px] top-1 -z-10 h-4 w-4 rounded-sm bg-[#0077FF] 2xl:h-6 2xl:w-5"></div>
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
