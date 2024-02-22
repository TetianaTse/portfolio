import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 bg-transparent z-[20] w-full flex gap-1 md:gap-5 justify-around md:justify-between md:px-10 p-3 md:p-5 bg-blue-800/70 sm:bg-blue-800/0">
      <h1 className="text-white text-[18px] md:text-[24px] leading-5">
        <Link href="/">
            Tetiana <span className="font-thin">Tsehychko</span>
            <span className="text-[32px] text-yellow-400">.</span>
        </Link>
      </h1>
      <div className="flex flex-row gap-3 w-[24] h-[24] flex-wrap">
        {Socials.map((social) => (
          <Link href={social.link} key={social.name}>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={24}
              height={24}
              className="cursor-pointer hover:scale-125 w-[20px] h-[20px] md:w-[24px] md:h-[24px]"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;