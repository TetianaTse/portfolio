"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from "@/constants";

interface ServiceItem {
  title: string;
  backgroundImage: string;
  icon: React.ComponentType;
  content: string[];
}

const ServiceSlider = () => {
  return (
    <div className="col-span-3 md:col-span-2">
    <div className="swiper max-w-[210px] md:max-w-[650px]">
      <Swiper
        breakpoints={{
          767: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
{ServiceData.map((item: ServiceItem) => (
          <SwiperSlide key={item.title}>
            <div className="rounded-md cursor-pointer flex flex-col gap-2 mb-10 group relative text-white shadow-lg rounde-xl px-6 py-8 h-[270px] max-w-[200px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70" />
              <div className="relative flex flex-col gap-1">
              <span className="text-yellow-400  group-hover:text-blue-400 w-[30px] h-[30px]"><item.icon /></span>
                <h1 className="text-xl uppercase text-yellow-400 pb-3">{item.title}</h1>
                {Array.isArray(item.content) &&
                  item.content.map((contentItem, index) => (
                    <p key={index} className="lg:text-[16px] pb-0 uppercase">
                      {contentItem}
                    </p>
                  ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default ServiceSlider;