import React from "react";
import Head from "next/head";
import classNames from "classnames";
import { FilePreview } from "@/components/file-preview";
import { HomeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const gitPaths = ["INSTALL.md", "PLUGINS.md", ".vimrc", ".config/nvim/init.vim", ".vim/ftplugin/cpp.vim"];

interface Files {
    [key: string]: string;
}

export default function Vim(props: { files: Files }) {
    const paths = Object.keys(props.files);
    const [path, setPath] = React.useState(paths[0]);

    const fileNav = <div className="flex flex-row gap-2 p-3">
        {paths.map(p => <div key={p} className={classNames("px-2 py-1 rounded cursor-pointer hover:bg-zinc-300", { ["bg-zinc-400"]: path === p })} onClick={() => setPath(p)}>{p}</div>)}
    </div>

    return (
        <>
            <Head>
                <title>DevDave</title>
                <meta name="description" content="DevDave Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col min-h-screen bg-zinc-700 text-white">
                <div className="flex flex-row gap-4 px-4 items-center">
                    <Link href={"/"}><HomeIcon className="w-5 cursor-pointer" /></Link>
                    {fileNav}
                </div>
                <FilePreview path={path} content={props.files[path]} />
            </div>
        </>
    );
}

Vim.getInitialProps = async () => {
    const files: { [key: string]: string } = {};

    for await (const path of gitPaths) {
        const res = await fetch(`https://raw.githubusercontent.com/devdave25/vim-stuff/master/${path}`)
        const content = await res.text()
        files[path] = content;
    }

    return { files };
}