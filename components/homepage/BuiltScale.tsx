"use client"

import { BUILD_GROWTH_DATA } from '@/helper/helper'
import Image from 'next/image'
import React from 'react'
import Heading from '../common/Heading'
import Paragraph from '../common/Paragraph'
import { EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/effect-coverflow';

import { Swiper, SwiperSlide } from 'swiper/react'
import Icons from '../common/Icons'
import SmoothAnimtionWrapper from '../common/SmoothAnimtionWrapper'


const BuiltScale = () => {
  return (
    <div className='lg:pb-37.5 md:pb-30 sm:pb-20 pb-15 px-5 relative overflow-x-clip'>
      <div className="max-w-[1036px] mx-auto w-full relative z-10">
        <div className="flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto pb-10">
          <Heading animate Tag='h2' className='lg:text-5xl md:text-custom-4xl sm:text-4xl text-3xl font-medium text-center text-white! bg-transparent!'>Built to Scale Fast.</Heading>
          <Paragraph animate className='text-center opacity-80'>We don't just write code. We build digital assets designed to lower customer acquisition costs and increase conversions.</Paragraph>
        </div>
        {/* <div className="lg:flex hidden flex-row flex-wrap items-stretch justify-center gap-y-4 lg:-mx-3 -mx-2">
          {
            BUILD_GROWTH_DATA.slice(0, 3).map((item, index) => (
              <div key={index} className={`lg:px-3 px-2 md:w-1/3 sm:w-1/2 w-full max-sm:max-w-[400px]`}>
                <div className="flex flex-col w-full grow h-full bg-[#0A0B0D] border border-[#2E3238] shadow-[inset_0_2.76px_11.06px_0_rgba(0,0,0,1),inset_0_-2.76px_11.06px_0_rgba(0,0,0,1),inset_2.76px_0_11.06px_0_rgba(0,0,0,1),inset_-2.76px_0_11.06px_0_rgba(0,0,0,1)] p-2.5 pb-8 rounded-[22px] relative overflow-clip group">
                  <Image width={100} height={100} className='w-full! h-auto! relative z-10 rounded-[16.59px] shadow-[0px_11.06px_60.83px_0px_#000000] border-[1.70px] border-white/3' src={item.image} alt={item.title} />
                  <div className="max-w-[270px] mx-auto">
                    <Heading className='text-base font-medium mt-5.5' Tag='h3'>{item.title}</Heading>
                    <Paragraph className='text-xs! opacity-50 leading-[140%]! mt-1.5'>{item.description}</Paragraph>
                  </div>
                  <div className="h-6.75 w-[80%] absolute top-0 left-1/2 -translate-x-1/2 bg-white blur-[30px] opacity-60"></div>
                  <div className="h-6.75 w-[95%] absolute top-0 left-1/2 -translate-x-1/2 bg-white blur-[30px] scale-95 opacity-0 translate-y-6 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 duration-800 ease-out will-change-transform"></div>
                </div>
              </div>
            ))
          }
        </div> */}
        <SmoothAnimtionWrapper>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            speed={700}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Autoplay, Navigation]}
            className="mySwiper max-lg:-mx-5!"
          >
            {
              BUILD_GROWTH_DATA.map((item, index) => (
                <SwiperSlide key={index} className={`rounded-[22px] overflow-clip max-w-[329px] w-full`}>
                  <div className="flex flex-col w-full grow h-full bg-[#0A0B0D] border border-[#2E3238] shadow-[inset_0_2.76px_11.06px_0_rgba(0,0,0,1),inset_0_-2.76px_11.06px_0_rgba(0,0,0,1),inset_2.76px_0_11.06px_0_rgba(0,0,0,1),inset_-2.76px_0_11.06px_0_rgba(0,0,0,1)] p-2.5 pb-8 rounded-[22px] relative overflow-clip group">
                    <Image width={1000} height={1000} className='w-full! h-auto! relative z-10 rounded-[16.59px] shadow-[0px_11.06px_60.83px_0px_#000000] border-[1.70px] border-white/3' src={item.image} alt={item.title} />
                    <div className="max-w-[270px] mx-auto">
                      <Heading className='text-base font-medium mt-5.5' Tag='h3'>{item.title}</Heading>
                      <Paragraph className='text-xs! opacity-50 leading-[140%]! mt-1.5'>{item.description}</Paragraph>
                    </div>
                    <div className="h-6.75 w-[80%] absolute top-0 left-1/2 -translate-x-1/2 bg-white blur-[30px] opacity-60"></div>
                    <div className="active-ellipse h-6.75 w-[95%] absolute top-0 left-1/2 -translate-x-1/2 bg-white blur-[30px] scale-95 opacity-0 translate-y-6 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-y-0 duration-800 ease-out will-change-transform"></div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </SmoothAnimtionWrapper>
        <SmoothAnimtionWrapper>
          <div className="flex gap-5 items-center justify-center w-full sm:mt-10 mt-5">
            <button className="custom-prev cursor-pointer hover:shadow-[3px_0_6px_-3px_#ffffff50] duration-400 ease-in size-12 bg-black slider-buttons rounded-4xl flex justify-center items-center">
              <Icons icon='arrowIcon' />
            </button>
            <button className="custom-next cursor-pointer hover:shadow-[-3px_0_6px_-3px_#ffffff50] duration-400 ease-in flex justify-center items-center size-12 bg-black slider-buttons before:bg-[linear-gradient(270.03deg,rgba(255,255,255,0.5)_0.02%,rgba(153,153,153,0)_50.18%)]! rounded-4xl">
              <Icons className='rotate-180' icon='arrowIcon' />
            </button>
          </div>
        </SmoothAnimtionWrapper>
      </div>
      <div className="bg-[#EAFFFF] opacity-60 blur-[200px] w-[415px] h-[129px] absolute top-[295px] left-1/2 -translate-x-1/2"></div>
      <img className='w-[1079px] h-auto absolute lg:-top-20 sm:top-0 -top-10 left-1/2 -translate-x-1/2 mix-blend-overlay' src={"/assets/images/png/built-for-growth-top-layer.png"} alt='top layer' />
    </div>
  )
}

export default BuiltScale