// Import Swiper React components
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

import { BsArrowRight } from 'react-icons/bs'


const MainSlider = () => {
  return (
    <>
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            navigation
            effect
            speed={1000}
            loop={true}
            autoplay={{
            delay: 5000,
            disableOnInteraction: true,
            }}
            className='swiper__main'
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)} >
            <SwiperSlide>
                <div style={{backgroundImage: `url(./assets/img/slides/01.jpg)`}} className='w-[100wv] h-[86vh] custom__overlayBlack bg-cover'>
                    <div className="w-[100%] h-[100%] flex justify-start items-center">
                        <div className="z-10 backdrop-blur-sm bg-white/70 lg:ml-[8rem] ml-[10%] lg:w-[36%] w-[80%] h-[70%] rounded-lg flex items-start justify-center flex-col p-8">
                            <h1 className="font-bold lg:text-[5rem] text-[3rem] leading-none mb-6">
                                Can't find parking?
                            </h1>
                            <h1 className="font-bold lg:text-[3rem] text-[2rem] text-gray-700 leading-none mb-6">
                                Get a Valet.
                            </h1>
                            <div className="flex justify-start items-center">
                                <button className="font-semibold text-black hover:text-gray-800  py-3 px-4 rounded-full w-auto flex items-center justify-start gap-1">
                                    Talk to us. <BsArrowRight />
                                </button>
                                <button className=" bg-gray-950 hover:bg-gray-800 py-3 px-4 rounded-full text-white w-auto flex items-center justify-start gap-1">
                                    Request a Valet. 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div style={{backgroundImage: `url(./assets/img/slides/02.jpg)`}} className='w-[100wv] h-[86vh] custom__overlayBlack bg-cover'>
                <div className="w-[100%] h-[100%] flex justify-start items-center">
                    <div className="z-10 backdrop-blur-sm bg-white/70 lg:ml-[8rem] ml-[10%] lg:w-[36%] w-[80%] h-[70%] rounded-lg flex items-start justify-center flex-col p-8">
                        <h1 className="font-bold lg:text-[5rem] text-[3rem] leading-none mb-6">
                            Can't find parking?
                        </h1>
                        <h1 className="font-bold lg:text-[3rem] text-[2rem] text-gray-700 leading-none mb-6">
                            Get a Valet.
                        </h1>
                        <div className="flex justify-start items-center">
                            <button className="font-semibold text-black hover:text-gray-800  py-3 px-4 rounded-full w-auto flex items-center justify-start gap-1">
                                Talk to us. <BsArrowRight />
                            </button>
                            <button className="bg-gray-950 hover:bg-gray-800 py-3 px-4 rounded-full text-white w-auto">
                                Request a Valet.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{backgroundImage: `url(./assets/img/slides/03.jpg)`}} className='w-[100wv] h-[86vh] custom__overlayBlack bg-cover'>
                    <div className="w-[100%] h-[100%] flex justify-start items-center">
                        <div className="z-10 backdrop-blur-sm bg-white/70 lg:ml-[8rem] ml-[10%] lg:w-[36%] w-[80%] h-[70%] rounded-lg flex items-start justify-center flex-col p-8">
                            <h1 className="font-bold lg:text-[5rem] text-[3rem] leading-none mb-6">
                                Can't find parking?
                            </h1>
                            <h1 className="font-bold lg:text-[3rem] text-[2rem] text-gray-700 leading-none mb-6">
                                Get a Valet.
                            </h1>
                            <div className="flex justify-start items-center">
                                <button className="font-semibold text-black hover:text-gray-800 py-3 px-4 rounded-full w-auto flex items-center justify-start gap-1">
                                    Talk to us. <BsArrowRight />
                                </button>
                                <button className="bg-gray-950 hover:bg-gray-800 py-3 px-4 rounded-full text-white w-auto">
                                    Request a Valet.
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default MainSlider