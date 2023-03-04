import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

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
    <Link href={demo} target="_blank" rel="noreferrer">
      <div className="flex w-56 flex-col gap-4 rounded-xl bg-[#f0f0f0] shadow-2xl hover:shadow-[#0077FF] md:h-96 2xl:w-80">
        <div className="relative h-36 w-full rounded-xl 2xl:h-56">
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
        <p className="relative z-20 px-3 font-semibold underline decoration-[#0077FF] decoration-4 underline-offset-4">
          {name}
        </p>
        <p className="px-3 text-sm">{description}</p>
        <div className="mt-auto flex justify-end px-3 pb-3">
          <a
            href={github}
            className="relative z-20"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="text-3xl" />
          </a>
        </div>
      </div>
    </Link>
  );
};

export default Project;
