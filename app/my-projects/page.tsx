import ProjectSlider from "@/components/ProjectSlider";
import React from "react";

const Page = () => {
  return (
    <section className="bg-[#0C011A] md:pt-20 mt-5">
      <div className="projects grid grid-cols-3 min-h-[80vh] items-center md:ml-28 md:mr-10">
        <div className="projects__title flex flex-col gap-3 p-12 col-span-1">
          <h1 className="text-[36px] md:text-[50px] text-white font-semibold">
            My Work<span className="text-[32px] text-yellow-400">.</span>
          </h1>
          <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
            This section features projects I&apos;ve created during my web development studies. They reflect my efforts and commitment to improving my skills.
          </p>
        </div>
        <ProjectSlider /> 
      </div>
    </section>
  );
};

export default Page;