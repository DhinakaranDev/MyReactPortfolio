import React from "react";
import websiteImg1 from "../assets/ecommerce-websites.jpg";
import websiteImg2 from "../assets/food-ecommerce.jpg";
import websiteImg3 from "../assets/website-blog.jpg";

export default function Projects() {
  return (
    <section
      className="flex flex-col py-20 px-5 bg-primary justify-center text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl text-white border-b-4 border-secondary mb-5 w-[140px] font-bold">
            Projects
          </h1>
          <p>
            These are some of the best projects. I have built these with React,
            MERN and Tailwind CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={websiteImg1} />
            <div className="project-desc">
              <p className="text-center py-5 px-5">
                A Ecommerece Website. Built with MERN Stack
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  href="https://github.com/DhinakaranDev/MyReactNativeProject"
                  target="_blank"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={websiteImg2} />
            <div className="project-desc">
              <p className="text-center py-5 px-5">
                Food Ecommerece website like swiggy. Built with MERN Stack
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  href="https://github.com/DhinakaranDev/MyReactNativeProject"
                  target="_blank"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
          <div className="relative">
            <img className="h-[200px] w-[500px]" src={websiteImg3} />
            <div className="project-desc">
              <p className="text-center py-5 px-5">
                Basic Blog Website. Built with React.js
              </p>
              <div className="flex justify-center">
                <a
                  className="btn"
                  href="https://github.com/DhinakaranDev/MyReactNativeProject"
                  target="_blank"
                >
                  View project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
