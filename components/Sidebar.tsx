"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { NavLinks } from "@/constants";
import Link from "next/link";
import Transition from "./Transition";

const Sidebar = () => {
    const [isRouting, setIsRouting] = useState(false);
    const [isActive, setIsActive] = useState("Home");
    const [prevPath, setPrevPath] = useState("/");

    const path = usePathname()
     useEffect(() => {
        if (prevPath !== path) {
        setIsRouting(true);
        }
    }, [path, prevPath]);

    useEffect(() => {
        if (isRouting) {
        setPrevPath(path);
        const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

        return () => clearTimeout(timeout);
        }
    }, [isRouting]);
  return (
    <div className="sidebar">
      <AnimatePresence mode="wait" key={Date.now()}>
              {isRouting && <Transition key={Date.now()} />}
        <div className="sidebar__col">
          {NavLinks.map((link) => (
            <Link
              key={link.key}
              href={link.link}
              onClick={() => setIsActive(link.name)}
            >
              <link.icon
                className={`w-[28px] h-[28px] ${
                  isActive === link.name ? "text-yellow-400" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;