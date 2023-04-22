import { Footer } from "@/containers/footer";
import { Navbar } from "@/containers/navbar";
import { Projects } from "@/containers/projects";
import { Welcome } from "@/containers/welcome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DevDave</title>
        <meta name="description" content="DevDave Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen bg-zinc-800 text-white gap-4">
        <Navbar />
        <div className="flex flex-col gap-4 px-2">
          <Welcome />
          <span className="text-xl px-4">Projects</span>
          <Projects />
          <Footer className="pb-2" />
        </div>
      </div>
    </>
  );
}
