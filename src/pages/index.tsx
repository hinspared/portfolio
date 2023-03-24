import React from "react";
import { type NextPage } from "next";
import About from "../components/About";
import Contacts from "../components/Contacts";
import Navbar from "../components/Navbar";
import useOnScreen from "../utils/hooks/useOnScreen";
import Projects from "../components/Projects";
import Home from "../components/Home";

const navigations = ["about", "projects", "contact"];

const MainPage: NextPage = () => {
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
  const contactRef = React.useRef(null);
  const contactVisible = useOnScreen(contactRef);

  React.useEffect(() => {
    if (homeVisible) setActive("logo");
    if (aboutVisible) setActive("about");
    if (projectsVisible) setActive("projects");
    if (contactVisible) setActive("contact");
  }, [aboutVisible, contactVisible, homeVisible, projectsVisible]);

  const scroll = (target: string) =>
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.currentTarget;
    const text = target.textContent as string;
    text.length > 0 ? setActive(text) : setActive("logo");
    text !== "" ? scroll(text) : scroll("home");
  };

  const handleClickMobile = () => {
    const currentIndex = navigations.indexOf(active);
    const nextSection = navigations[currentIndex + 1] as string;
    const lastSection = active === navigations[2];
    // Navigate to home section on contacts section
    if (lastSection) {
      setActive("logo");
      scroll("home");
    } else {
      setActive(nextSection);
      scroll(nextSection);
    }
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
      <Home mobile={mobile} isLandscape={isLandscape} ref={homeRef} />
      <About mobile={mobile} isLandscape={isLandscape} ref={aboutRef} />
      <Projects mobile={mobile} isLandscape={isLandscape} ref={projectsRef} />
      <Contacts mobile={mobile} isLandscape={isLandscape} ref={contactRef} />
    </>
  );
};

export default MainPage;
