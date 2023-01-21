import React from "react";
import { type NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import useOnScreen from "../utils/hooks/useOnScreen";

const Home: NextPage = () => {
  const [active, setActive] = React.useState("logo");

  // setActive on visible div
  const homeRef = React.useRef(null);
  const homeVisible = useOnScreen(homeRef);
  const aboutRef = React.useRef(null);
  const aboutVisible = useOnScreen(aboutRef);
  const projectsRef = React.useRef(null);
  const projectsVisible = useOnScreen(projectsRef);
  const contactsRef = React.useRef(null);
  const contactsVisible = useOnScreen(contactsRef);

  React.useEffect(() => {
    if (homeVisible) setActive("logo");
    if (aboutVisible) setActive("about");
    if (projectsVisible) setActive("projects");
    if (contactsVisible) setActive("contacts");
  }, [aboutVisible, contactsVisible, homeVisible, projectsVisible]);

  // if (activeAbout) setActive("about");
  // if (activeProjects) setActive("projects");
  // if (activeContacts) setActive("contacts");

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const text = target.textContent as string;
    text.length > 0 ? setActive(text) : setActive("logo");
  };

  return (
    <>
      <Head>
        <title>h.ins</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar active={active} onClick={handleClick} />
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
        <p className="mt-10 w-3/5 text-lg text-slate-900" ref={homeRef}>
          As a purposeful and highly motivated person I am looking for a company
          that will give me a chance to apply my skills and develop myself as a
          Front-End Developer
        </p>
      </div>
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contacts ref={contactsRef} />
    </>
  );
};

export default Home;
