import React from "react";
import { type NextPage } from "next";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";
import useOnScreen from "../utils/hooks/useOnScreen";
import Projects from "../components/Projects";

const navigations = ["about", "projects", "contacts"];

const Home: NextPage = () => {
  const [mobile, setMobile] = React.useState(false);
  const [isLandscape, setIsLandscape] = React.useState(false);

  React.useEffect(() => {
    function handleOrientationChange() {
      setIsLandscape(window.matchMedia("(orientation: portrait)").matches);
    }
    window.addEventListener("orientationchange", handleOrientationChange);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  React.useEffect(() => {
    const handleScreenSize = () => {
      setMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleScreenSize);

    handleScreenSize();
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

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

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const text = target.textContent as string;
    text.length > 0 ? setActive(text) : setActive("logo");
  };

  const handleClickMobile = () => {
    const currentIndex = navigations.indexOf(active);
    const nextSection = navigations[currentIndex + 1] as string;
    console.log(currentIndex);
    active === navigations[2] ? setActive("logo") : setActive(nextSection);
  };

  return (
    <>
      <Navbar
        active={active}
        onClick={handleClick}
        onClickMobile={handleClickMobile}
        navigations={navigations}
        mobile={mobile}
      />
      <div
        className={`mx-auto w-4/5 gap-y-3 pt-20 md:h-screen md:w-3/5 md:pt-36 2xl:pt-72 ${
          mobile && isLandscape ? "" : "h-screen"
        }`}
        id="home"
      >
        <p className="text-sm md:text-xl 2xl:text-3xl">
          Hello there, I&apos;m{" "}
        </p>
        <div className="relative max-w-max">
          <p className="text-xl md:text-2xl md:text-5xl 2xl:text-7xl">
            Marat Khasanov
          </p>
          <div className="absolute bottom-1 left-[-2%] -z-10 h-1.5 w-[105%] bg-[#0077FF] md:h-2 md:rounded-sm"></div>
        </div>
        <p className="text-sm md:text-xl 2xl:text-3xl">Front-End Developer</p>
        <p
          className="mt-10 text-lg md:w-3/5 md:text-2xl 2xl:text-4xl"
          ref={homeRef}
        >
          As a purposeful and highly motivated person I am looking for a company
          that will give me a chance to apply my skills and develop myself as a
          Front-End Developer
        </p>
      </div>
      <About mobile={mobile} isLandscape={isLandscape} ref={aboutRef} />
      <Projects mobile={mobile} isLandscape={isLandscape} ref={projectsRef} />
      <Contacts mobile={mobile} isLandscape={isLandscape} ref={contactsRef} />
    </>
  );
};

export default Home;
