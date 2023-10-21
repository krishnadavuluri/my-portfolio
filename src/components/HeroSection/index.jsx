import React from "react";

// import TypeWriter from "./TypeWriter/TypeWriter";
import { TypeWriter } from "./TypeWriter/TypeWriter";

import { BsLinkedin, BsGithub } from "react-icons/bs";

import { FaGithubSquare } from "react-icons/fa";

const GIT_HUB_URL = "https://github.com/krishnadavuluri";
const LINKEDIN_URL = "https://www.linkedin.com/in/krishna-davuluri-b417461a6/";

export default function HeroSection({ id }) {
  return (
    <div
      id="heroSection"
      className="bg-[color:var(--black)]  sm:pt-[8rem] pt-[9rem] [&>div]:text-[color:var(--textWhite)] top-[4rem] flex flex-col  h-screen w-screen"
    >
      <div className="grid grid-cols-12 sm:gap-8 gap-4 justify-center ">
        <div className="col-span-12 ">
          <center>
            <p className="font-bold sm:text-[8rem] text-[2.5rem]">
              Krishna Kumar
            </p>
          </center>
        </div>
        <div className="col-span-12 ">
          <center>
            <TypeWriter />
          </center>
        </div>
        <div className="col-span-12 [&>div]:text-[color:var(--textWhite)]">
          <center>
            <div className="flex justify-center text-4xl gap-6">
              <div className="transition ease-in-out hover:scale-125 duration-300">
                <a href={GIT_HUB_URL} target="_blank">
                  <BsGithub />
                </a>
              </div>
              <div className="transition ease-in-out hover:scale-125 duration-300">
                <a href={LINKEDIN_URL} target="_blank">
                  <BsLinkedin />
                </a>
              </div>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
