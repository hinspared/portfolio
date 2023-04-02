import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { RxDividerVertical } from "react-icons/rx";

interface HomeProps {
  mobile: boolean;
  isLandscape: boolean;
}

const icons = [
  {
    name: "html",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "css",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "typescript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org",
  },

  {
    name: "react",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://react.dev",
  },
  {
    name: "nextjs",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    link: "https://nextjs.org",
  },
  {
    name: "tailwindcss",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    link: "https://tailwindcss.com",
  },
  {
    name: "material-ui",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    link: "https://mui.com",
  },
];

const Home = React.forwardRef<HTMLDivElement, HomeProps>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div
        className={`mx-auto w-4/5 gap-y-3 pt-20 md:w-3/5 md:pt-36 2xl:pt-72 
        ${props.mobile && props.isLandscape ? "" : "h-screen"}`}
        id="home"
        ref={ref}
      >
        <div className="flex">
          <div className="flex flex-col">
            <p className="text-sm md:text-xl 2xl:text-3xl">
              Hello there, I&apos;m{" "}
            </p>
            <p className="my-3 text-3xl font-medium underline decoration-[#0077FF] decoration-4 underline-offset-4 md:text-5xl 2xl:text-6xl">
              Marat Khasanov
            </p>
            <p className="text-sm md:text-xl 2xl:text-3xl">
              Front-End Developer from Prague, Czechia
            </p>
            <div className="mt-44 mb-10 flex gap-3 text-3xl 2xl:text-4xl">
              <Link
                href="https://www.linkedin.com/in/marat-khasanov-209a02106"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="cursor-pointer hover:text-[#0077FF]" />
              </Link>
              <Link
                href="https://github.com/Hinspared"
                target="_blank"
                rel="noreferrer"
              >
                <BsGithub className="cursor-pointer hover:text-[#0077FF]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <p className=" text-sm font-bold md:text-3xl md:font-medium 2xl:text-4xl">
            Tech Stack
          </p>
          <RxDividerVertical className="hidden text-3xl text-slate-600 md:block" />
          <div className="mt-5 flex flex-wrap gap-5 md:mt-0">
            {React.Children.toArray(
              icons.map((icon) => (
                <Link href={icon.link} target="_blank" rel="noreferrer">
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    height={props.mobile ? 25 : 40}
                    width={props.mobile ? 25 : 40}
                  />
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
);
Home.displayName = "Home";

export default Home;
