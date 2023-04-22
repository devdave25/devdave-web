import React from "react";
import classNames from "classnames";
import Link from "next/link";

interface Project {
    link: string;
    name: string;
    description: string;
    comingSoon?: boolean;
}

const Project: React.FC<Project> = ({ link, name, description, comingSoon }) => {
    return <Link className="flex rounded flex-col bg-zinc-700 p-2 h-52 from-zinc-600 to-40% hover:drop-shadow-xl cursor-pointer to-transparent hover:bg-gradient-to-t" href={!comingSoon ? link : ""} target="_blank">
        <div className="flex w-full h-full border items-center justify-center">
            <span>IMAGE</span>
        </div>
        <div className="flex flex-col">
            <span>{!comingSoon ? name : "Coming soon"}</span>
            <span>{!comingSoon ? description : "New project coming soon."}</span>
        </div>
    </Link>
}


interface ProjectsProps {
    className?: string;
}
export const Projects: React.FC<ProjectsProps> = ({ className }) => {
    return (
        <div
            className={classNames(
                "grid sm:grid-cols-3 md:grid-cols-4 gap-4",
                className
            )}
        >
            <Project link="https://tools.devdave.co.uk" name="DevTools" description="Collection of useful developer tools." />
            <Project link="https://poker.devdave.co.uk" name="Poker planning" description="Poker planning system." comingSoon />
            <Project link="https://prop-map.devdave.co.uk" name="Property Map" description="UK Property map experiment." comingSoon />
            <Project link="https://flights.devdave.co.uk" name="Flights" description="Sleasy-Jet flight finder" comingSoon />
            <Project link="https://air.devdave.co.uk" name="Air quality" description="Room condition control panel" comingSoon />
        </div >
    );
};
