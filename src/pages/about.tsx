import { Navbar } from "@/containers/navbar";
import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>DevDave</title>
                <meta name="description" content="DevDave Website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gradient-to-tl min-h-screen bg-zinc-800 text-white">
                <Navbar />
                <div className="p-6">
                    <p>My name is David.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
        </>
    );
}
