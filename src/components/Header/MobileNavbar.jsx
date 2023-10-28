import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar({ openMenu, setOpenMenu }) {
  const closeNavBar = () => {
    const hamburgerElement = document.querySelector(".hamburger");
    hamburgerElement.classList.toggle("change");
    setOpenMenu(!openMenu);
  };

  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 60, opacity: 1 }}
          exit={{ x: 60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="h-screen  w-[60%] bg-[color:var(--black)] top-[4rem] right-0 z-10 fixed "
        >
          <div className="flex gap-4 flex-col text-xl p-[0.5rem] text-[color:var(--textWhite)]  ">
            <p>
              <a href="#skills" onClick={() => closeNavBar()}>
                Skills
              </a>
            </p>
            <p>
              <a href="#education" onClick={() => closeNavBar()}>
                Education
              </a>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
