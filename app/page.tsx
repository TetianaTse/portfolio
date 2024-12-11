import Particle from "@/components/Particle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen relative bg-[#070431]">
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        <Particle />
      </div>
      <section className="about-me flex justify-around gap-5 md:gap-12 pt-[10rem] md:pt-[16rem] ml-5 md:ml-20 mr-5">
        <div className="title flex flex-col">
          <div>
              <h1 className="rubik text-white lg:text-[36px] uppercase">Hi, my name is Tetiana Tsehychko {" "}
                <span className="text-yellow-400">and I&apos;m a beginner front-end developer</span>
              </h1>
          </div>
          <div>
              <p className="text-[14px] text-gray-200 mb-5 mt-5 md:text-[16px]">
              My goal is to create beautiful and user-friendly web interfaces that make users&apos; lives easier and more enjoyable. I strive to improve and enhance my skills to bring the boldest ideas to life. Let&apos;s make the web world better together!
              </p>
          </div>
          <button className="resume">
            <a href="https://drive.google.com/file/d/1lk-BEe6LV90rw4Ed93pdEy3Ir7o3Ex_L/view?usp=sharing" className="resume__link">My resume</a>
          </button>
        </div>
        <div className="image">
          <Image
            src='/assets/girl.png'
            priority
            alt="image"
            width={450}
            height={450}
            className="max-w-[100%] object-cover"
          />
      </div>
      </section>
    </main>
  )
}
