import React from "react";
import nft_marketplace from "../../public/projects/nft_marketplace.png";
import todo_app from "../../public/projects/todo_app.png";
import travello from "../../public/projects/travello.png";
import dynamic from "next/dynamic";
const Project = dynamic(() => import("./Project"), {
  ssr: false,
});
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const projectsList = [
  {
    name: "nft_marketplace",
    description:
      "NFT marketplace, where users can view/buy NFTs. Built with Typescript/NextJS, TailwindCSS, Prisma and ThirdwebSDK",
    github: "https://github.com/Hinspared/nft_marketplace",
    demo: "https://nft-marketplace-hinspared.vercel.app",
    image: nft_marketplace,
  },
  {
    name: "todo_list",
    description:
      "This is a simple to-do application built with TypeScript/React and MaterialUI. It allows users to add, edit, and delete tasks, and also add subtasks",
    github: "https://github.com/Hinspared/todoapp",
    demo: "https://todoapp-hinspared.netlify.app",
    image: todo_app,
  },
  {
    name: "travello",
    description:
      "My first landing page built in Javascript/React and MaterialUI",
    github: "https://github.com/Hinspared/travello",
    demo: "https://travellobyhinspared.vercel.app",
    image: travello,
  },
];

interface ProjectsProps {
  mobile: boolean;
  isLandscape: boolean;
}

const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <>
        {props.mobile ? (
          <div
            ref={ref}
            id="projects"
            className={`${props.isLandscape ? "" : "h-screen"}`}
          >
            <div className="relative mx-auto flex w-3/5 pt-20">
              <div className="relative mb-10 max-w-max">
                <p className="text-lg font-medium text-slate-900">projects</p>
                <div className="absolute bottom-1 -z-10 h-1 w-[130%] bg-[#0077FF]"></div>
              </div>
            </div>
            <Swiper spaceBetween={50} slidesPerView={1} loop>
              {React.Children.toArray(
                projectsList.map((project) => (
                  <SwiperSlide className="flex justify-center pb-16">
                    <Project
                      name={project.name}
                      description={project.description}
                      github={project.github}
                      demo={project.demo}
                      image={project.image}
                    />
                  </SwiperSlide>
                ))
              )}
            </Swiper>
          </div>
        ) : (
          <div className="mx-auto h-screen w-3/5 pt-36 2xl:pt-72" id="projects">
            <div ref={ref}>
              <div className="relative max-w-max">
                <p className="font-medium text-slate-900 md:text-5xl 2xl:text-7xl">
                  projects
                </p>
                <div className="absolute bottom-1 -z-10 h-2 w-[130%] rounded-sm bg-[#0077FF] md:left-[-0.5rem]"></div>
              </div>
              <div className="mt-10 flex justify-center gap-x-10">
                {React.Children.toArray(
                  projectsList.map((project) => (
                    <Project
                      name={project.name}
                      description={project.description}
                      github={project.github}
                      demo={project.demo}
                      image={project.image}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);
Projects.displayName = "Projects";

export default Projects;
