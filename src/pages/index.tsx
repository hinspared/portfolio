import { type NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>h.ins</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div
        className="mx-auto flex h-screen w-3/5 flex-col gap-y-3 pt-36"
        id="home"
      >
        <p className="text-xl text-slate-900">Hi, I&apos;m </p>
        <div className="relative max-w-max">
          <p className="text-slate-900 md:text-5xl">Marat Khasanov</p>
          <div className="absolute left-[-0.5rem] bottom-1 -z-10 h-2 w-[105%] rounded-sm bg-[#0077FF]"></div>
        </div>
        <p className="text-xl text-slate-900">Front-End Developer</p>
        <p className="mt-10 w-3/5 text-lg text-slate-900">
          As a purposeful and highly motivated person I am looking for a company
          that will give me a chance to apply my skills and develop myself as a
          Front-End Developer
        </p>
      </div>
      <About />
      <Projects />
      <Contacts />
    </>
  );
};

export default Home;
