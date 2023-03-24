import Image from "next/image";
import React from "react";
import logoBlue from "../../public/Logo_blue.webp";
import logoGray from "../../public/Logo_gray.webp";

const Navbar: React.FC<{
  active: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  onClickMobile: () => void;
  navigations: string[];
  mobile: boolean;
}> = ({ active, onClick, onClickMobile, navigations, mobile }) => {
  return (
    <div className="fixed top-0 z-30 w-full bg-gray-400">
      <div className="mx-auto flex w-4/5 items-end justify-between py-3 md:w-3/5">
        <Image
          src={active === "logo" ? logoBlue : logoGray}
          alt="logo"
          width={60}
          height={60}
          onClick={onClick}
          className="cursor-pointer"
        />
        {mobile ? (
          <div className="flex w-10 flex-col gap-y-2">
            {React.Children.toArray(
              navigations.map((navigation) => (
                <div
                  className={`h-1.5 w-full rounded-sm ${
                    active === navigation ? "bg-[#0077FF]" : "bg-[#f0f0f0]"
                  }`}
                  onClick={onClickMobile}
                  data-name={navigation}
                ></div>
              ))
            )}
          </div>
        ) : (
          <>
            {React.Children.toArray(
              navigations.map((navigation) => (
                <div className="relative">
                  <p
                    className={`relative z-20 cursor-pointer font-semibold ${
                      active === navigation
                        ? "text-[#0077FF]"
                        : "text-[#C8C8C8]"
                    }`}
                    onClick={onClick}
                  >
                    {navigation}
                  </p>
                  {/* {active === navigation ? (
                    <div className="absolute bottom-1 z-10 h-1 w-20 rounded-xl bg-[#0077FF]"></div>
                  ) : null} */}
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
