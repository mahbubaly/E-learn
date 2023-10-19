import React from 'react';
import man_women from '../../assets/Images/e-learning.png'
import tikRight from '../../assets/Images/tikMark.png'
import flyIcon from '../../assets/Images/flyIcon.png'
import Danial from '../../assets/Images/Danial.png'
import star from '../../assets/Images/Star 6.png'
import qua from '../../assets/Images/quatation.png'
import book from '../../assets/Images/bookIcon.png'
import '../SharedPage/Style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const E_learning = () => {
    return (
        <>
            <div className='container mx-auto lg:mt-[140px] mt-[85px] lg:p-0 p-5 '>
                <div className='lg:flex gap-[85px] items-center'>


                    {/* Normal */}
                    <div className='lg:w-[615px] mt-[30px] lg:mt-0 '>
                        <h1 className='lg:text-[46px] text-[24px] font-semibold lg:leading-[60px] leading-[32px]'>Why choose E-Learn for live learning?</h1>
                        <p className='lg:text-[20px] text-[14px] textBlack mt-[18px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,There are many variations of passages.</p>


                        <div className='block mt-5 lg:hidden'>
                            <img src={man_women} className='lg:w-[521px]' alt="" />
                        </div>

                        <div className='flex justify-center items-center mt-[40px] lg:mt-[30px]'>
                            <div className=''>

                                <div className='flex gap-[10px] lg:gap-[14px] lg:items-center'>
                                    <img src={tikRight} className='lg:w-[24px] w-5 h-5 lg:h-[24px]' alt="" />
                                    <p className='lg:w-[557px] font-medium text-[16px] lg:text-[22px]'>Learn creative skills to achieve your personal and professional goals.</p>
                                </div>
                                <div className='my-5 flex gap-[10px] lg:gap-[14px] lg:items-center'>
                                    <img src={tikRight} className='lg:w-[24px] w-5 h-5 lg:h-[24px]' alt="" />
                                    <p className='lg:w-[557px] font-medium text-[16px] lg:text-[22px]'>Tune in and level up at your own pace.</p>
                                </div>
                                <div className='flex gap-[10px] lg:gap-[14px] lg:items-center'>
                                    <img src={tikRight} className='lg:w-[24px] w-5 h-5 lg:h-[24px]' alt="" />
                                    <p className='lg:w-[557px] font-medium text-[16px] lg:text-[22px]'>Go from dabbler to master in a matter of hours.</p>
                                </div>
                                <div className='mt-5 flex gap-[10px] lg:gap-[14px] lg:items-center'>
                                    <img src={tikRight} className='lg:w-[24px] w-5 h-5 lg:h-[24px]' alt="" />
                                    <p className='lg:w-[557px] font-medium text-[16px] lg:text-[22px]'>Connect with a global community of curious creatives.</p>
                                </div>



                            </div>
                        </div>

                    </div>
                    <div className='lg:block hidden'>
                        <img src={man_women} className='w-[521px]' alt="" />
                    </div>


                </div>



                <div className='mt-[80px] lg:mt-[153px] justify-center flex lg:gap-[30px] lg:px-0 px-5 '>
                    <img src={flyIcon} className=' lg:w-[51px] w-[23px] h-[29px] lg:h-[64px] -mt-[30px]  lg:-mt-[20px]' alt="" />
                    <h1 className='font-semibold lg:text-[46px] text-[24px] text-center '>What learners are saying</h1>

                </div>
                <p className='lg:w-[920px] mx-auto text-center text-[14px] lg:text-[20px] textBlack mt-[18px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,There are many variations of passages.</p>

                {/* slider  */}




                {/* Swiper js */}

                <div className='mt-[50px] lg:mt-[80px]'>
                    <Swiper

                        pagination={{
                            clickable: true,

                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className='lg:pb-[71px] pb-[120px]'>

                            <div className='lg:flex gap-[30px] '>
                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>

                                <div className='slideBox py-[50px] px-[30px] w-[370px]'>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>

                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                            </div>


                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='lg:flex gap-[30px]'>
                                {/* 1 */}
                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>

                                {/* 2 */}

                                <div className='slideBox my-[30px] lg:my-0 py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>

                                {/* 3 */}

                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            {/* 1 */}
                            <div className='lg:flex gap-[30px]'>
                                {/* 1 */}
                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/* 2 */}

                                <div className='my-[30px] lg:my-0 slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/* 3 */}
                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>

                            <div className='lg:flex gap-[30px]'>
                                {/* 1 */}
                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/*  */}

                                <div className='my-[30px] lg:my-0 slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/* 3 */}

                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                            </div>

                        </SwiperSlide>

                        <SwiperSlide>


                            <div className='lg:flex gap-[30px]'>
                                {/* 1 */}
                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/*  */}

                                <div className='my-[30px] lg:my-0 slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/* 3 */}

                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>


                            <div className='lg:flex gap-[30px]'>
                                {/* 1 */}
                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/*  */}

                                <div className='my-[30px] lg:my-0 slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                                {/* 3 */}

                                <div className='slideBox py-[50px] px-[30px] w-[370px] '>
                                    <div className='flex gap-[16px] items-center'>
                                        <img src={Danial} className='w-[74px] h-[74px]' alt="" />
                                        <div>
                                            <h2 className='text-[24px] font-medium'>Danial waska</h2>
                                            <p className='text-[16px] textBlack'>Branding Student</p>
                                            <div className='flex gap-[5px] mt-[10px]'>
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                                <img src={star} className='w-[12px] h-[12px]' alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <img src={qua} className='w-[218px] mt-[50px]' alt="" />
                                    <p className='mt-[20px] text-[20px]'>
                                        A enim Njilam tempor sapier gravid done porta and b adrdit ipsum enim jusinteger actor im congue. A enim Njilatempor sapier gvida done porta and utb adrdit ipsum nim jus integer actor imeer  inte.
                                    </p>

                                </div>
                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>

                <div className=' bg-[#FDEAEE]'>

                    <div className='insectBg rounded-[23px] mt-[80px]  lg:mt-[152px] p-5 lg:p-0 lg:py-[80px]'>
                        <div className='flex justify-center'>
                            <div className='flex gap-[25px] items-center '>
                                {/* <img src={book} className='w-[59px] h-[56px]' alt="" /> */}
                                <h1 className='lg:text-[46px] text-[24px] lg:w-[710px] font-semibold text-center'>It's the Best time to start investing in learning more and improving yourself.</h1>
                            </div>
                        </div>
                        <div className='lg:flex justify-center mt-[50px] '>
                            <button className='lg:w-[169px] w-full  h-[60px] bg-primary rounded-[29px] text-[16px] font-semibold text-white hover:bg-red-800'>Join For Free</button>
                        </div>
                        <div className='lg:flex justify-center gap-[30px] mt-[50px]'>
                            <div className='flex gap-[10px] items-center'>
                                <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                <p className=' text-[18px]'>No credit card required</p>
                            </div>

                            <div className='my-[10px] lg:my-0 flex gap-[10px] items-center'>
                                <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                <p className=' text-[18px]'>Full access to all features</p>
                            </div>

                            <div className='flex gap-[10px] items-center'>
                                <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                <p className=' text-[18px]'>Cancel anytime</p>
                            </div>
                        </div>



                    </div>
                </div>






            </div>

        </>
    );
};

export default E_learning;