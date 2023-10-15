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
            <div className='container mx-auto mt-[140px]'>
                <div className='flex gap-[85px] items-center'>
                    <div className='w-[615px]'>
                        <h1 className='text-[46px] font-semibold leading-[60px]'>Why choose E-Learn for live learning?</h1>
                        <p className='text-[20px] textBlack mt-[18px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,There are many variations of passages.</p>

                        <div className='flex justify-center items-center mt-[30px]'>
                            <div className=''>

                                <div className='flex gap-[14px] items-center'>
                                    <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                    <p className='lg;w-[557px] font-medium text-[22px]'>Learn creative skills to achieve your personal and professional goals.</p>
                                </div>
                                <div className='my-5 flex gap-[14px] items-center'>
                                    <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                    <p className='lg;w-[557px] font-medium text-[22px]'>Tune in and level up at your own pace.</p>
                                </div>
                                <div className='flex gap-[14px] items-center'>
                                    <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                    <p className='lg;w-[557px] font-medium text-[22px]'>Go from dabbler to master in a matter of hours.</p>
                                </div>
                                <div className='mt-5 flex gap-[14px] items-center'>
                                    <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                    <p className='lg;w-[557px] font-medium text-[22px]'>Connect with a global community of curious creatives.</p>
                                </div>



                            </div>
                        </div>

                    </div>
                    <div>
                        <img src={man_women} className='w-[521px]' alt="" />
                    </div>


                </div>



                <div className='mt-[153px] justify-center flex gap-[30px]'>
                    <h1 className='font-semibold lg:text-[46px] text-[24px]'>What learners are saying</h1>
                    <img src={flyIcon} className=' w-[51px] h-[64px]  -mt-[20px]' alt="" />

                </div>
                <p className='lg:w-[920px] mx-auto text-center text-[20px] textBlack mt-[18px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,There are many variations of passages.</p>

                {/* slider  */}




                {/* Swiper js */}

                <Swiper

                    pagination={{
                        clickable: true,

                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='lg:pb-[71px]'>

                        <div className='slideBox py-[50px] px-[30px] w-[370px] mt-[80px]'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideBox py-[50px] px-[30px] w-[370px] mt-[80px]'>
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
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='slideBox py-[50px] px-[30px] w-[370px] mt-[80px]'>
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
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='slideBox py-[50px] px-[30px] w-[370px] mt-[80px]'>
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
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='slideBox py-[50px] px-[30px] w-[370px] mt-[80px]'>
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
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='slideBox py-[50px] px-[30px] w-[370px] mt-[80px]'>
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
                    </SwiperSlide>
                    <SwiperSlide>

                        <div className='slideBox py-[50px] px-[30px] w-[370px] mt-[80px]'>
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
                    </SwiperSlide>

                </Swiper>


                <div className='insectBg'>

                    <div className='bg-[#FDEAEE] rounded-[23px] mt-[152px] py-[80px]'>
                        <div className='flex justify-center'>
                            <div className='flex gap-[25px] items-center '>
                                {/* <img src={book} className='w-[59px] h-[56px]' alt="" /> */}
                                <h1 className='lg:text-[46px] lg:w-[710px] font-semibold text-center'>It's the Best time to start investing in learning more and improving yourself.</h1>
                            </div>
                        </div>
                        <div className='flex justify-center mt-[50px] '>
                            <button className='lg:w-[169px] w-full  h-[60px] bg-primary rounded-[29px] text-[16px] font-semibold text-white hover:bg-red-800'>Join For Free</button>
                        </div>
                        <div className='flex justify-center gap-[30px] mt-[50px]'>
                            <div className='flex gap-[10px] items-center'>
                                <img src={tikRight} className='w-[24px] h-[24px]' alt="" />
                                <p className=' text-[18px]'>No credit card required</p>
                            </div>

                            <div className='flex gap-[10px] items-center'>
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