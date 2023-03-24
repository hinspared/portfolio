import React from "react";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const list = [
  {
    name: "phone",
    value: "+420608725616",
  },
  {
    name: "email",
    value: "khasanov.marat@icloud.com",
  },
];

interface ContactsProps {
  mobile: boolean;
  isLandscape: boolean;
}

const Contacts = React.forwardRef<HTMLDivElement, ContactsProps>(
  (props, ref: React.LegacyRef<HTMLDivElement>) => {
    const landscapeMode = props.mobile && props.isLandscape;

    return (
      <div
        className={`mx-auto  w-4/5 pt-20 md:w-3/5 md:pt-36 2xl:pt-72 ${
          landscapeMode ? "mb-16" : "h-screen"
        }`}
        id="contact"
      >
        <div ref={ref}>
          <p className="text-2xl font-medium underline decoration-[#0077FF] decoration-4 underline-offset-4 md:text-5xl">
            contact
          </p>
          <p className="text-xs font-light md:mt-3 md:ml-1 md:text-base">
            Let&apos;s have a chat
          </p>
          <div
            className={`mt-3 md:mt-14 ${
              landscapeMode
                ? "grid grid-cols-2 gap-x-20 gap-y-5"
                : "flex flex-col gap-10"
            }  md:grid md:grid-cols-2 md:gap-16`}
          >
            {React.Children.toArray(
              list.map((item) => (
                <div className="flex items-center gap-5">
                  {item.name === "phone" ? (
                    <BsFillTelephoneForwardFill className="relative z-20 text-2xl text-[#0077FF] md:text-3xl" />
                  ) : (
                    <MdEmail className="relative z-20 text-2xl text-[#0077FF] md:text-3xl" />
                  )}
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3">
                      <p className="relative z-20 text-xl font-medium md:text-2xl">
                        {item.name}:
                      </p>
                    </div>
                    {item.name === "phone" ? (
                      <a href={`tel:${item.value}`} className="mt-3">
                        +420 608 725 616
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
                  </div>
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
