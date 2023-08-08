import React from "react";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

interface Project {
  link: string;
  name: string;
  description: string;
  image?: string;
  className?: string;
  light?: boolean;
}

const Project: React.FC<Project> = ({
  link,
  name,
  description,
  image,
  className,
  light,
}) => {
  return (
    <Link
      className={classNames(
        "group relative flex cursor-pointer flex-col overflow-hidden rounded bg-container",
        className
      )}
      href={link}
      target="_blank"
    >
      <Image
        width={200}
        height={200}
        className="h-full w-full overflow-auto object-cover transition duration-300 group-hover:scale-110"
        src={image ?? "/empty-project.png"}
        alt="project image"
      />
      <div className="absolute bottom-1 left-1 flex flex-col">
        <span
          className={classNames("text-sm", {
            "text-black": !light,
            "text-white": light,
          })}
        >
          {name}
        </span>
        <span
          className={classNames("text-xs", {
            "text-black": !light,
            "text-white": light,
          })}
        >
          {description}
        </span>
      </div>
    </Link>
  );
};

interface ProjectsProps {
  className?: string;
}
export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <div
      className={classNames(
        "flex h-20 min-w-max flex-row gap-4 sm:h-32 lg:h-40",
        className
      )}
    >
      <Project
        link="https://tools.devdave.co.uk"
        image="/tools-image.png"
        name="DevTools"
        description="Collection of useful developer tools"
        className="aspect-video"
        light
      />
      <Project
        link="https://fly.devdave.co.uk"
        image="/fly-image.png"
        name="Flights"
        description="Flights finder"
        className="aspect-video"
      />
      {/* <Project link="https://poker.devdave.co.uk" name="Poker planning" description="Poker planning system." /> */}
    </div>
  );
};
