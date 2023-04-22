import React from "react";
import classNames from "classnames";
import { Search } from "@/components/search";
import Link from "next/link";

interface NavbarProps {
    hideSearch?: boolean;
}
export const Navbar: React.FC<NavbarProps> = ({ hideSearch }) => {
    return (
        <div
            className={classNames(
                "flex flex-row p-4 items-center justify-between border-b-2 gap-4",
                "bg-zinc-700 fill-cyan-500"
            )}
        >
            <div className="flex flex-row gap-8 justify-between">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
            </div>
            <div className="flex flex-row items-center gap-4 max-[500px]:hidden">
                {!hideSearch && (
                    <Search />
                )}
            </div>
        </div >
    );
};
