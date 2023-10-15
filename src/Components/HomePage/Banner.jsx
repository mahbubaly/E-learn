import React from 'react';
import '../SharedPage/Style.css'
import cap from '../../assets/Images/cap.png'
import img1 from '../../assets/Images/lapBan.png'
import img2 from '../../assets/Images/duo.png'
import img3 from '../../assets/Images/Codecov.png'
import img4 from '../../assets/Images/Testing.png'
import img5 from '../../assets/Images/Magic.png'
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <>

            <div className='container mx-auto'>
                <div className='lg:flex gap-[100px] items-center justify-between lg:mt-[59px]'>
                    <div className='lg:w-[519px]'>

                        <h1 className='text-[32px] font-semibold lg:text-[60px] '>Professional and Lifelong Learning Comes Here  <img src={cap} className='inline-block w-[44px] h-[36px] lg:w-[70px] lg:h-[70px]' alt="" /></h1>
                        <p className='text-[20px] mt-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,</p>

                        <div className='lg:flex gap-5 mt-[50px]'>

                            <button className='lg:w-[159px] w-full h-[60px] bg-primary rounded-[29px] text-[16px] font-semibold text-white hover:bg-red-800'>Get Started</button>

                            <button className='lg:w-[194px]  w-full  exploreCourse mt-[10px] lg:mt-0 h-[60px]  rounded-[29px] text-[16px] font-semibold text-white hover:bg-red-400 hover:text-white'>Explore Courses</button>
                        </div>


                    </div>
                    <div>
                        <img src={img1} className=' lg:w-[515px] lg:h-[603px] ' alt="" />

                        <div className='-mt-[218px] lg:-ml-[50px]  relative '>
                            <p className='w-[145px] bg-white  h-[44px] Tutor flex justify-center items-center  font-bold text-[20px]'>250+ <span className='text-[14px] opacity-50 font-light ml-[10px]'>Tutors</span></p>
                            <p className='my-[10px] bg-white  w-[187px] h-[44px] Tutor flex justify-center items-center  font-bold text-[20px]'>2K+<span className='text-[14px] opacity-50 font-light ml-[10px]'>Video Courses</span></p>
                            <p className='w-[191px] bg-white  h-[44px] Tutor flex justify-center items-center  font-bold text-[20px]'>5K+<span className='text-[14px] opacity-50 font-light ml-[10px]'>Online Courses</span></p>

                        </div>


                    </div>
                </div>


                <Marquee speed={80}>
                    <div className='flex mt-[127px]'>
                        <div className='ml-[54px] w-[178px]'>
                            <h2 className='text-[30px] font-bold text-primary'>250+</h2>

                            <p className='text-[20px] text-black font-medium'>Collaboration</p>
                        </div>

                        <div className='flex gap-[74px]'>
                            <img src={img2} className='w-[154px] h-[36px]' alt="" />
                            <img src={img3} className='w-[187px] h-[36px]' alt="" />
                            <img src={img4} className='w-[140px] h-[36px]' alt="" />
                            <img src={img5} className='w-[234px] h-[36px]' alt="" />
                        </div>
                    </div>

                </Marquee>



            </div>


        </>
    );
};

export default Banner;