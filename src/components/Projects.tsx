import React from "react";
import nft_marketplace from "../../public/projects/nft_marketplace.webp";
import todo_list from "../../public/projects/todo_list.webp";
import travello from "../../public/projects/travello.webp";
import dynamic from "next/dynamic";
const Project = dynamic(() => import("./Project"), {
  ssr: false,
});
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const projectsList = [
  {
    name: "NFT MARKETPLACE",
    description:
      // "NFT marketplace, where users can view/buy NFTs. Built with Typescript/NextJS, TailwindCSS, Prisma and ThirdwebSDK",
      "Full stack project where users can view and buy NFTs. Built with Typescript/NextJS, TailwindCSS, Prisma and ThirdwebSDK",
    github: "https://github.com/Hinspared/nft_marketplace",
    demo: "https://nft-marketplace-hinspared.vercel.app",
    image: nft_marketplace,
  },
  {
    name: "TODO LIST",
    description:
      "This is a simple to-do list built with TypeScript/React, MaterialUI and Formik. It allows users to add, edit, and delete tasks, and also add subtasks",
    github: "https://github.com/Hinspared/todo_list",
    demo: "https://todo-list.hinspared.vercel.app",
    image: todo_list,
  },
  {
    name: "TRAVELLO",
    description:
      "My first landing page built with Javascript/React and MaterialUI",
    github: "https://github.com/Hinspared/travello",
    demo: "https://travellobyhinspared.netlify.app",
    image: travello,
  },
];

interface ProjectsProps {
  mobile: boolean;
  isLandscape: boolean;
}

const Projects = React.forwardRef<HTMLDivElement, ProjectsProps>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    const landscapeMode = props.mobile && props.isLandscape;

    return (
      <>
        {props.mobile ? (
          <div
            ref={ref}
            id="projects"
            className={`${landscapeMode ? "" : "h-screen"}`}
          >
            <div className="relative mx-auto mb-10 flex w-4/5 pt-20 md:w-3/5">
              <p
                className="text-2xl font-medium text-slate-900 underline decoration-[#0077FF] decoration-4 underline-offset-4"
                style={{
                  textDecorationSkipInk: "none",
                }}
              >
                projects
              </p>
            </div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
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
              <p
                className="text-5xl font-medium underline decoration-[#0077FF] decoration-4 underline-offset-4 2xl:text-7xl"
                style={{
                  textDecorationSkipInk: "none",
                }}
              >
                projects
              </p>

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
