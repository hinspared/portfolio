import Image, { type StaticImageData } from "next/image";
import React from "react";

interface ProjectProps {
  name: string;
  description: string;
  github: string;
  demo: string;
  image: StaticImageData;
}

const Project: React.FC<ProjectProps> = ({
  name,
  description,
  github,
  demo,
  image,
}) => {
  return (
    <div className="flex w-56 flex-col gap-4 rounded-xl bg-[#f0f0f0] shadow-2xl hover:shadow-[#0077FF]">
      <div className="relative h-36 w-full rounded-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-t-xl"
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>
      <div className="relative mx-3 max-w-max">
        <p className="relative z-20">{name}</p>
        <div className="absolute bottom-1 z-10 h-1 w-full rounded-sm bg-[#0077FF]"></div>
      </div>
      <p className="mx-3 text-sm">{description}</p>
      <div className="m-3 mt-auto flex justify-between">
        <div className="relative">
          <a
            href={github}
            className="relative z-20"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
          <div className="absolute left-[-3px] bottom-[-0.5px] z-10 h-6 w-6 rounded-sm bg-[#0077FF]"></div>
        </div>
        <a href={demo} target="_blank" rel="noreferrer">
          live-demo
        </a>
      </div>
    </div>
  );
};

export default Project;
