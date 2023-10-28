import React from "react";
import nodejs from "../../assests/nodejs.png";
import { motion, AnimatePresence } from "framer-motion";
import pythonImage from "../../assests/python2.png";
import javascript from "../../assests/javascript.png";
import java from "../../assests/java.png";
import react from "../../assests/react.png";
import materialUi from "../../assests/material.png";
import docker from "../../assests/docker.png";
import git from "../../assests/git.png";
import vscode from "../../assests/vscode.png";
import mongodb from "../../assests/mongodb.png";
import css from "../../assests/css.png";
import tailwind from "../../assests/tailwinf.png";
import framer from '../../assests/framer.webp'

export default function Skills() {
  return (
    <div
      id="skills"
      className="bg-[color:var(--black)] pt-[5rem] [&>div]:text-[color:var(--textWhite)] z-0 flex flex-col  h-screen w-screen"
    >
      <h1 className="timeLineHeading">Skills</h1>
      <div className="flex items-center flex-col gap-6 w-[90%] mx-auto [&>h1]:text-[color:var(--textWhite)]">
        <div>
          <h1 className="skills-heading">Languages and Database</h1>
          <div className="flex gap-4 justify-center mt-[4px]">
            <div className="">
              <img src={java} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Java</p>
            </div>
            <div>
              <img src={pythonImage} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Python</p>
            </div>
            <div>
              <img src={javascript} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Javascript</p>
            </div>
            <div>
              <img src={mongodb} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">MongoDb</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="skills-heading">Web Styling and Animation</h1>
          <div className="flex gap-4 justify-center mt-[4px]">
            <div>
              <img src={css} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">CSS</p>
            </div>
            <div>
              <img src={tailwind} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Twailwind</p>
            </div>
            <div>
              <img src={framer} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Framer</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="skills-heading">Frameworks and Technologies</h1>
          <div className="flex gap-4 justify-center mt-[4px]">
            <div>
              <img src={react} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">React</p>
            </div>
            <div>
              <img src={nodejs} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Nodejs</p>
            </div>
            <div>
              <img src={materialUi} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">MaterialUi</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="skills-heading">Tools and Platforms</h1>
          <div className="flex gap-4 justify-center mt-[4px]">
            <div>
              <img src={docker} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Docker</p>
            </div>
            <div>
              <img src={git} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">Git</p>
            </div>
            <div>
              <img src={vscode} className="h-[4rem] w-[4rem]" />
              <p className="skill-text">VS Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
