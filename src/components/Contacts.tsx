import React from "react";

const list = [
  {
    name: "phone",
    value: "+420 608 725 616",
  },
  {
    name: "github",
    value: "https://github.com/Hinspared",
  },
  {
    name: "email",
    value: "khasanov.marat@icloud.com",
  },
  {
    name: "linkedin",
    value: "https://www.linkedin.com/in/marat-khasanov-209a02106/",
  },
];

const Contacts = () => {
  return (
    <div className="mx-auto h-screen w-3/5 pt-36" id="contacts">
      <div className="relative max-w-max">
        <p className="md:text-5xl">contacts</p>
        <div className="absolute left-[-0.5rem] bottom-1 -z-10 h-2 w-56 rounded-sm bg-[#0077FF]"></div>
      </div>
      <p className="mt-3 ml-1 font-light">Let&apos;s have a chat</p>
      <div className="mt-10 flex justify-between"></div>
    </div>
  );
};

export default Contacts;
