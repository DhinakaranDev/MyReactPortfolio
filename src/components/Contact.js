import React from "react";
import ResumeImg from "../assets/resume.jpg";

export default function Contact() {
  return (
    <section className="flex flex-col bg-primary py-32" id="contact">
      <div className="flex flex-col items-center  text-white">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">
          Contact
        </h1>
        <p className="pb-5">
          If you want to discuss more in detail, please contact me
        </p>
        <p className="py-2">
          <spam className="font-bold">Email :</spam>daniel.md.manoj@gmail.com
        </p>
        <p className="py-2">
          <spam className="font-bold">Phone :</spam>+91909909990
        </p>
      </div>
    </section>
  );
}
