import React from "react";
import AboutImg from "../assets/about.png";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="md:w-1/2 py-5">
        <img src={AboutImg} />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold">
            About Me
          </h1>
          <p className="pb-5">
            Hi am Dhinakaran,front-end developer. I built beatiful
            Webstites,Mobile applications with React.js,React native and
            Tailwind CSS
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React,Redux,Redux Tool
            kit,Axios,Tailwind,CSS and manymore
          </p>
          <p className="pb-5">
            In mobile apps,I know Android,jetpack compose,kotlin
          </p>
        </div>
      </div>
    </section>
  );
}
