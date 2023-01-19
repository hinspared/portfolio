import React from "react";

const list = [
  {
    name: "phone",
    value: "+420608725616",
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
      <div className="mt-16 flex flex-col md:grid md:grid-cols-2 md:gap-16">
        {React.Children.toArray(
          list.map((item) => (
            <div className="flex flex-col">
              <div className="relative">
                <p className="relative z-20 text-2xl font-light">{item.name}</p>
                <div className="absolute left-[-0.5rem] bottom-[3px] z-10 h-6 w-6 rounded-sm bg-[#0077FF]"></div>
              </div>
              {item.name === "phone" ? (
                <a href={`tel:${item.value}`} className="mt-3">
                  +420 608 725 616
                </a>
              ) : null}
              {item.name === "github" ? (
                <a href={item.value} className="mt-3">
                  {item.value}
                </a>
              ) : null}
              {item.name === "email" ? (
                <a href={`mailto:${item.value}`} className="mt-3">
                  {item.value}
                </a>
              ) : null}
              {item.name === "linkedin" ? (
                <a href={item.value} className="mt-3">
                  Marat Khasanov
                </a>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Contacts;
