import React from "react";
import nft_marketplace from "../../public/projects/nft_marketplace.png";
import todo_app from "../../public/projects/todo_app.png";
import travello from "../../public/projects/travello.png";
import Project from "./Project";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const projectsList = [
  {
    name: "nft_marketplace",
    description: "Some decription will be here later",
    github: "https://github.com/Hinspared/nft_marketplace",
    demo: "https://nft-marketplace-hinspared.vercel.app",
    image: nft_marketplace,
  },
  {
    name: "todo_app",
    description: "Some decription will be here later",
    github: "https://github.com/Hinspared/todoapp",
    demo: "https://todoapp-hinspared.netlify.app",
    image: todo_app,
  },
  {
    name: "travello",
    description: "Some decription will be here later",
    github: "https://github.com/Hinspared/travello",
    demo: "https://travellobyhinspared.netlify.app",
    image: travello,
  },
];

const MobileProjects = React.forwardRef<HTMLDivElement>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div className="mx-auto h-screen w-3/5 pt-36" id="projects" ref={ref}>
        <div>
          <div className="relative max-w-max">
            <p className="text-slate-900 md:text-5xl">projects</p>
            <div className="absolute left-[-0.5rem] bottom-1 -z-10 h-2 w-56 rounded-sm bg-[#0077FF]"></div>
          </div>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            className="mt-10 py-10"
            loop
          >
            {React.Children.toArray(
              projectsList.map((project) => (
                <SwiperSlide className="flex justify-center py-20">
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
      </div>
    );
  }
);

MobileProjects.displayName = "MobileProjects";

export default MobileProjects;
