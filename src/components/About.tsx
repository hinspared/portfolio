import React from "react";
import Modal from "./Modal";

const skills = [
  "HTML",
  "CSS/SASS",
  "Javascript",
  "Typescript",
  "ReactJS",
  "NextJS",
  "Redux",
  "RestAPI",
  "Prisma",
  "MaterialUI",
  "TailwindCSS",
  "Git/Github",
  "CI/CD",
  "Testing (Jest)",
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
          props.isLandscape ? "" : "h-screen"
        } w-4/5 pt-20 md:w-3/5 2xl:pt-36`}
        id="about"
        ref={ref}
      >
        <div ref={ref}>
          <div
            className={`gap-8 ${
              landscapeMode ? "grid grid-cols-2" : "flex flex-col"
            }`}
          >
            <div>
              <p className="text-2xl font-medium underline decoration-[#0077FF] decoration-4 underline-offset-4 md:text-5xl 2xl:text-7xl">
                about
              </p>
              <p className="mt-3 text-sm md:mt-5 md:mt-10 md:w-3/5 md:text-lg 2xl:text-2xl">
                I&apos;m a self-taught Front-End developer who began my journey
                in January 2022 with JavaScript. I quickly moved on to React and
                later, TypeScript and Next.js to build efficient, scalable web
                apps. Now I&apos;m well-equipped to build modern web
                applications.
              </p>
              <Modal />
            </div>
            <div>
              <p className="text-2xl font-medium underline decoration-[#0077FF] decoration-4 underline-offset-4 md:text-5xl 2xl:text-7xl">
                skills
              </p>
              <div
                className={`mt-3 grid md:mt-5 ${
                  landscapeMode ? "grid-cols-2" : "grid-cols-2"
                } justify-between gap-x-20 gap-y-2 px-1 md:grid-cols-4 2xl:mt-10`}
              >
                {React.Children.toArray(
                  skills.map((skill) => (
                    <p className="text-sm font-medium 2xl:text-2xl">{skill}</p>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);
About.displayName = "About";

export default About;
