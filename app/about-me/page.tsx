import ServiceSlider from '@/components/ServiceSlider'
import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <section className='bg-[#0C011A] h-screen md:pt-20 mt-5'>
      <div className='skills grid grid-cols-3 min-h-[80vh] items-center md:ml-28 md:mr-10'>
          <div className='skills__title flex flex-col gap-3 p-12 col-span-1'>
            <h1 className="text-[36px] md:text-[50px] text-white font-semibold">
              My Skills<span className="text-[32px] text-yellow-400">.</span>
            </h1>
            <p className="max-w-[400px] text-[14px] text-gray-200 md:text-gray-400">
              My skills encompass fundamental web development tools such as HTML, CSS, and JavaScript, as well as modern technologies and frameworks for building dynamic and engaging web applications
            </p>
          </div>
          <ServiceSlider />
        </div>
        <div className='absolute -left-36 bottom-5 rotate-12 animate-pulse duration-75'>
        <Image
          priority
          src="/assets/bulb.png"
          alt='bulb'
          width={260}
          height={260}
          className='w-full h-full hidden md:block'
          />
        </div>
      </section>
  )
}

export default Page