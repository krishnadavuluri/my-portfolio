import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNavbar({ openMenu }) {
  return (
    <AnimatePresence>
      {openMenu && (
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="h-[90%]  w-[40%] bg-[color:var(--black)] top-[4rem] absolute right-0 z-50"
        >
          <div className="flex gap-4 flex-col p-[0.5rem] text-xl text-[color:var(--textWhite)]">
            <p>About</p>
            <p>Work</p>
            <p>Contact</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
