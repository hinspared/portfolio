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

const Contacts = React.forwardRef<HTMLDivElement>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div className="mx-auto h-screen w-3/5 pt-36" id="contacts">
        <div ref={ref}>
          <div className="relative max-w-max">
            <p className="text-lg font-medium md:text-5xl">contacts</p>
            <div className="absolute left-[-0.5rem] bottom-1 -z-10 h-1 w-[130%] bg-[#0077FF] md:h-2 md:w-56 md:rounded-sm"></div>
          </div>
          <p className="mt-3 ml-1 font-light">Let&apos;s have a chat</p>
          <div className="mt-14 flex flex-col gap-16 md:grid md:grid-cols-2">
            {React.Children.toArray(
              list.map((item) => (
                <div className="flex flex-col">
                  <div className="relative">
                    <p className="relative z-20 text-2xl font-light">
                      {item.name}
                    </p>
                    <div className="absolute left-[-0.5rem] bottom-[3px] z-10 h-6 w-6 rounded-sm bg-[#0077FF]"></div>
                  </div>
                  {item.name === "phone" ? (
                    <a href={`tel:${item.value}`} className="mt-3">
                      +420 608 725 616
                    </a>
                  ) : null}
                  {item.name === "github" ? (
                    <a
                      href={item.value}
                      className="mt-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : null}
                  {item.name === "email" ? (
                    <a
                      href={`mailto:${item.value}`}
                      className="mt-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.value}
                    </a>
                  ) : null}
                  {item.name === "linkedin" ? (
                    <a
                      href={item.value}
                      className="mt-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Marat Khasanov
                    </a>
                  ) : null}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
);

Contacts.displayName = "contacts";

export default Contacts;
