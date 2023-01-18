import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoBlue from "../../public/Logo_blue.png";
import logoGray from "../../public/Logo_gray.png";

const navigations = ["about", "projects", "contacts"];

const Navbar = () => {
  const [active, setActive] = React.useState("logo");
  return (
    <div className="sticky top-0 w-full bg-neutral-400">
      <div className="m-auto flex w-3/5 items-end justify-between space-x-36 py-3">
        <Link href="/#home" scroll={false}>
          <Image
            src={active === "logo" ? logoBlue : logoGray}
            alt="logo"
            width={60}
            height={60}
            onClick={() => setActive("logo")}
            className="cursor-pointer"
          />
        </Link>
        {React.Children.toArray(
          navigations.map((navigation) => (
            <Link href={`/#${navigation}`} scroll={false}>
              <div className="relative">
                <p
                  className="relative z-20 cursor-pointer text-slate-800"
                  onClick={() => setActive(navigation)}
                >
                  {navigation}
                </p>
                {active === navigation ? (
                  <div className="absolute bottom-1 z-10 h-1 w-20 rounded-xl bg-[#0077FF]"></div>
                ) : null}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Navbar;
