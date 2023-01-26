import React from "react";
import useOutsideClick from "../utils/hooks/useOutsideClick";

const Modal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const ref = useOutsideClick(() => setIsOpen(false));
  return (
    <>
      <button
        className="mt-3 rounded-lg bg-[#0077FF] p-2 text-white"
        onClick={() => {
          setTimeout(() => {
            setIsOpen(true);
          }, 100);
        }}
      >
        Read full
      </button>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } top-0 left-0 z-30 flex h-screen w-full items-center justify-center bg-gray-900 bg-opacity-75`}
      >
        <div
          className={`h-3/5 w-4/5 overflow-scroll rounded-lg bg-white p-4 md:h-max ${
            isOpen ? "" : "hidden"
          }`}
          ref={ref}
        >
          <p>
            I&apos;m a self-taught Front-End developer who began this journey in
            January 2022. I started learning JavaScript, and quickly realized
            the power and versatility of this language. In May 2022, I decided
            to dive deeper into web development and picked up React. I was
            fascinated by the ability to build complex user interfaces and the
            concept of reusable components. By the time I finished my React
            studies, I felt confident in my ability to build web applications.
            However, I realized that I needed a more robust and scalable way to
            organize my code. So, I decided to learn TypeScript. I found that
            the added type safety and better code organization made it easier to
            maintain and scale my applications. I also wanted to improve my
            skills in building server-rendered applications, and learn full
            stack, so I decided to learn Next.js. I found Next.js easy to use
            and the way it handled server-side rendering and code splitting made
            it a great tool to build fast and efficient applications. Now, with
            a strong understanding of JavaScript, React, TypeScript, and
            Next.js, I&apos;m well-equipped to build modern web applications
            that are fast, reliable and scalable.
          </p>
          {/* <button
            className="mt-3 rounded-lg bg-red-500 p-2 text-white"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Modal;
