import React from 'react';
import { Link } from 'react-router-dom';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import google from '../../assets/Images/google-play.png'
import apple from '../../assets/Images/apple.png'


const Footer = () => {
    return (
        <>
            <>
                <div className='container mx-auto mt-[100px]'>
                    <div className='flex justify-between'>
                        <div className='w-[334px]'>
                            <Link to='/' className='text-primary  font-bold  text-[18px] lg:text-[30px]  '>E-Learn</Link>
                            <p className='text-[16px] mt-[13px]'>Learn anything from home with experts. Learn freelancing today. Quality Courses At Affordable Prices.</p>

                            <div className='my-[30px] flex gap-[13px]'>
                                <Link className='w-[36px] flex justify-center items-center border-[1.5px] border-primary hover:border-primary h-[36px] bg-primary rounded-[50%] text-white'>
                                    <BiLogoFacebook className='w-[24px] h-[24px]' />
                                </Link>

                                <Link className='w-[36px] flex justify-center items-center border-[1.5px] border-black hover:border-primary h-[36px] rounded-[50%] hover:bg-primary hover:text-white'>
                                    <BiLogoLinkedin className='w-[20px] h-[20px]' />
                                </Link>

                                <Link className='w-[36px] flex justify-center items-center border-[1.5px] border-black hover:border-primary h-[36px] rounded-[50%] hover:bg-primary hover:text-white'>
                                    <AiOutlineTwitter className='w-[20px] h-[20px]' />
                                </Link>

                                <Link className='w-[36px] flex justify-center items-center border-[1.5px] border-black hover:border-primary h-[36px] rounded-[50%] hover:bg-primary hover:text-white'>
                                    <AiOutlineInstagram className='w-[20px] h-[20px]' />
                                </Link>
                            </div>


                            <div className='flex gap-[30px]'>
                                <div className='w-[155px] GooApp flex gap-[10px] h-[54px] justify-center items-center'>
                                    <img src={google} className='w-[24px] h-[24px]' alt="" />
                                    <div>
                                        <p className='text-[12px]'>Get it on </p>
                                        <p className='text-[14px] font-semibold'>Google play </p>
                                    </div>

                                </div>

                                <div className='w-[156px] GooApp flex gap-[10px] h-[54px] justify-center items-center'>
                                    <img src={apple} className='w-[24px] h-[24px]' alt="" />
                                    <div>
                                        <p className='text-[12px]'>Available on the</p>
                                        <p className='text-[14px] font-semibold'>Apple Store</p>
                                    </div>

                                </div>
                            </div>



                        </div>

                        <div className='flex gap-[90px]'>
                            <div>
                                <h2 className='text-[18px] font-semibold'>Courses</h2>
                                <Link className='text-[16px] mt-[20px] block'>Classroom Courses</Link>
                                <Link className='text-[16px] my-[12px] block'>Virtual Classroom Courses</Link>
                                <Link className='text-[16px] block'>E-Learning Courses</Link>

                            </div>
                            <div>
                                <h2 className='text-[18px] font-semibold'>E-Learning</h2>
                                <Link className='text-[16px] mt-[20px] block'>About us</Link>
                                <Link className='text-[16px] my-[12px] block'>Why Channel</Link>
                                <Link className='text-[16px] block'>Testimonials</Link>
                                <Link className='text-[16px] block my-[12px]'>Promotions</Link>
                                <Link className='text-[16px] block'>Blog</Link>

                            </div>
                            <div>
                                <h2 className='text-[18px] font-semibold'>Platform</h2>
                                <Link className='text-[16px] block mt-[20px]'>Security</Link>
                                <Link className='text-[16px] block my-[12px]'>Terms & Conditions</Link>
                                <Link className='text-[16px] block'>My account</Link>

                            </div>
                           
                            

                        </div>
                    </div>

                    <hr  className='mt-[60px] hrLine'/>

                    <p className='text-center text-[14px] my-[30px]'>Copyright 2023 all rights reserved by Designer Jubayer </p>

                </div>

            </>

        </>
    );
};

export default Footer;