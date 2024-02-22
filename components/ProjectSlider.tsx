"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ProImages, ProImages2 } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ProjectSlider = () => {
  return (
    <div className="swiper col-span-2 max-w-[250px] sm:max-w-[400px] md:max-w-[650px]">
      <Swiper
        breakpoints={{
          700: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide className="mb-14 mr-5">
          <div className="grid grid-cols-2 gap-4 md:px-16 md:pt-[10rem]">
            {ProImages.map((image) => (
              <div className="relative group w-[120px] sm:w-[200px] h-[120px] sm:h-[200px] md:w-[230px] md:h-[230px]" key={image.src}>
                <Image
                  src={image.src}
                  alt="project image"
                  width={280}
                  height={280}
                  className="rounded-md h-full w-full object-cover"
                />

                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg p-3">
                  <Link href={image.link}><span className="uppercase font-medium">View Project</span>
                    <Image
                      src="/assets/icons/arrow-right.svg"
                      alt="arrow right"
                      width={20}
                      height={20}
                      className="invert brightness-0 ml-2 inline"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="mb-14 mr-5">
          <div className="grid grid-cols-2 gap-4 md:px-16 md:pt-[10rem]">
            {ProImages2.map((image) => (
              <div className="relative group w-[120px] sm:w-[200px] h-[120px] sm:h-[200px]  md:w-[230px] md:h-[230px]" key={image.src}>
                <Image
                  src={image.src}
                  alt="project image"
                  width={280}
                  height={280}
                  className="rounded-md w-full h-full object-cover"
                />

                <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
                <div className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-70 transition-opacity duration-200 text-white md:text-lg p-3">
                  <Link href={image.link}><span className="uppercase font-medium">View Project</span>
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="arrow right"
                    width={20}
                    height={20}
                    className="invert brightness-0 ml-2 inline"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;