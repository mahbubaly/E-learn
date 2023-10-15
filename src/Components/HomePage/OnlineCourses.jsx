import React from 'react';
import book from '../../assets/Images/bookIcon.png'
import art from '../../assets/Images/ArtIcon.png'
import uiUx from '../../assets/Images/UiUxIcon.png'
import digital from '../../assets/Images/DigiIcon.png'
import dev from '../../assets/Images/dev.png'
import finance from '../../assets/Images/filance.png'
import music from '../../assets/Images/music.png'
import photo from '../../assets/Images/photo.png'
import webDes from '../../assets/Images/web.png'
import flyIcon from '../../assets/Images/flyIcon.png'
import women from '../../assets/Images/womenBg.png'
import learner from '../../assets/Images/learner.png'
import business from '../../assets/Images/busniess.png'
import education from '../../assets/Images/education.png'
import img1 from '../../assets/Images/img1.png'
import img2 from '../../assets/Images/img2.png'
import img3 from '../../assets/Images/img3.png'
import img4 from '../../assets/Images/img4.png'
import img5 from '../../assets/Images/img5.png'
import img6 from '../../assets/Images/img6.png'
import star from '../../assets/Images/Star.png'




const OnlineCourses = () => {
    return (
        <>
            <div className='container mx-auto mt-[115px]'>
                <div className='lg:w-[920px] mx-auto'>
                    <div className='flex gap-[41px] justify-center'>
                        <img src={book} className='inline-block  w-[59px] h-[56px]' alt="" />
                        <h1 className='text-[46px] font-semibold text-center w-[600px] leading-[60px]'> Explore 4000+ Free Online Courses</h1>

                    </div>
                    <p className='text-[20px] mt-[18px] text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,There are many variations of passages.</p>

                </div>

                {/* 8 div */}
                <div className=' mt-[80px] '>
                    <div className='lg:flex gap-[30px]'>
                        <div className=' box w-[270px] py-[25px] px-[19px]'>
                            <img src={art} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold mt-[24px]'>Art & Design</h1>
                            <p className='text-lg mt-[14px] textBlack'>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                        <div className='lg:my-0 my-[30px] box w-[270px] py-[25px] px-[19px]'>
                            <img src={uiUx} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold mt-[24px]'>UI/UX Design</h1>
                            <p className='text-lg mt-[14px] textBlack'>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                        <div className='box w-[270px] bg-primary  py-[25px] px-[19px]'>
                            <img src={digital} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold text-white mt-[24px]'>Digital Marketing</h1>
                            <p className='text-lg mt-[14px] textWhite '>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                        <div className='lg:mt-0 mt-[30px] box w-[270px] py-[25px] px-[19px]'>
                            <img src={dev} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold mt-[24px] textBlack'>Development </h1>
                            <p className='text-lg mt-[14px] '>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                    </div>


                    <div className='lg:flex gap-[30px] mt-[30px]'>
                        <div className='box w-[270px] py-[25px] px-[19px]'>
                            <img src={finance} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold mt-[24px]'>Finance</h1>
                            <p className='text-lg mt-[14px] textBlack'>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                        <div className='lg:my-0 my-[30px] box w-[270px] py-[25px] px-[19px]'>
                            <img src={music} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold mt-[24px]'>Sound & Music</h1>
                            <p className='text-lg mt-[14px] textBlack'>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                        <div className='box w-[270px] py-[25px] px-[19px]'>
                            <img src={photo} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold mt-[24px]'>Photography</h1>
                            <p className='text-lg mt-[14px] textBlack'>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                        <div className='lg:mt-0 mt-[30px] box w-[270px] py-[25px] px-[19px]'>
                            <img src={webDes} className='w-[54px] h-[54px]' alt="" />
                            <h1 className='text-[22px] font-semibold mt-[24px]'>Web Design</h1>
                            <p className='text-lg mt-[14px] textBlack'>Live tech bootcamps and online classes to kickstart or accelerate your career</p>
                        </div>
                    </div>

                </div>


                {/* A Faster Way For To Grow And Upskill */}

                <div className='mt-[153px] flex gap-[38px]'>
                    <h1 className='font-semibold lg:text-[46px] text-[24px]'>A Faster Way For To Grow And Upskill   </h1>
                    <img src={flyIcon} className=' w-[51px] h-[64px]  -mt-[35px]' alt="" />

                </div>
                <p className='lg:w-[920px] text-[20px] textBlack mt-[18px]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,There are many variations of passages.</p>


                <div className='mt-[80px] flex gap-[109px]'>
                    <div><img src={women} className='w-[470px] h-[516px]' alt="" /></div>
                    <div>
                        <div className='px-[30px] w-[566px] h-[158px]  flex justify-center items-center  box '>
                            <div className='flex gap-[34px]'>
                                <img src={learner} className='w-[70px] h-[70px]' alt="" />
                                <div>
                                    <p className='text-lg textBlack'>For learners</p>
                                    <h3 className='text-[22px] font-semibold mt-[8px]'>Propel your career, get a degree, or expand your knowledge at any level.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='my-[30px] bg-primary text-white px-[30px] w-[566px] h-[158px]  flex justify-center items-center  box '>
                            <div className='flex gap-[34px]'>
                                <img src={business} className='w-[70px] h-[70px]' alt="" />
                                <div>
                                    <p className='text-lg textWhite'>For Business</p>
                                    <h3 className='text-[22px] font-semibold mt-[8px]'>Propel your career, get a degree, or expand your knowledge at any level.</h3>
                                </div>
                            </div>
                        </div>
                        <div className='px-[30px] w-[566px] h-[158px]  flex justify-center items-center  box '>
                            <div className='flex gap-[34px]'>
                                <img src={education} className='w-[70px] h-[70px]' alt="" />
                                <div>
                                    <p className='text-lg textBlack'>For Educators</p>
                                    <h3 className='text-[22px] font-semibold mt-[8px]'>Propel your career, get a degree, or expand your knowledge at any level.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*  Explore Courses */}
                <div className='mt-[159px] lg:w-[920px] mx-auto'>
                    <div className='flex gap-[20px] justify-center'>
                        <img src={book} className='inline-block  w-[59px] h-[56px]' alt="" />
                        <h1 className='text-[46px] font-semibold text-center  leading-[60px]'> Explore Courses</h1>

                    </div>
                    <p className='text-[20px] mt-[18px] text-center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,There are many variations of passages.</p>

                </div>

                {/* popular coding marketing */}
                <div className='sectionPink lg:h-[120px] flex justify-center items-center mt-[80px]'>
                    <div className='flex gap-[30px]'>
                        <div>
                            <button className='lg:w-[109px] w-full h-[44px] bg-primary rounded-[100px] text-[16px] font-semibold text-white hover:bg-red-800'>Popular</button>
                        </div>
                        <div>
                            <button className='lg:w-[102px] w-full h-[44px] bg-[#fff] rounded-[100px] text-[16px] font-semibold hover:text-white  textBlack hover:bg-primary'>Recent</button>
                        </div>
                        <div>
                            <button className='lg:w-[101px] w-full h-[44px] bg-[#fff] rounded-[100px] text-[16px] font-semibold hover:text-white  textBlack hover:bg-primary'>Design</button>
                        </div>
                        <div>
                            <button className='lg:w-[125px] w-full h-[44px] bg-[#fff] rounded-[100px] text-[16px] font-semibold hover:text-white  textBlack hover:bg-primary'>Marketing</button>
                        </div>
                        <div>
                            <button className='lg:w-[103px] w-full h-[44px] bg-[#fff] rounded-[100px] text-[16px] font-semibold hover:text-white  textBlack hover:bg-primary'>Coding</button>
                        </div>
                    </div>

                </div>

                {/* video play */}

                <div className='mt-[30px] lg:flex gap-[30px]'>
                    <div className='VideoBox hover:bg-primary hover:text-white lg:w-[370px] p-5'>

                        <img src={img1} alt="" />
                        <p className='text-[14px] font-medium mt-[40px] '>20hr 45m</p>
                        <h2 className='text-[22px] font-semibold mt-[10px]'>Web Development: Complete Programming Course</h2>

                        <p className='text-[16px] font-medium  mt-[17px]'>by <span className=' font-semibold'>Joe Root</span></p>

                        <div className='mt-[17px] flex justify-between items-center'>
                            <div className=' flex gap-[10px] items-center'>

                                <div className='pinkBg w-[72px]  flex rounded-[16px]  py-[6px] px-[16px] items-center gap-[6px]'>
                                    <img src={star} className='w-[13px] h-[12px]' alt="" />
                                    <p className='text-[14px] font-semibold'>4.8</p>

                                </div>
                                <p className=''>(4,563)</p>


                            </div>

                            <div>
                                <p className='font-bold text-[20px]'>$134</p>
                            </div>
                        </div>

                    </div>
                    {/* 02 */}
                    <div className='lg:my-0 my-[30px] VideoBox text-white bg-primary lg:w-[370px] p-5'>

                        <img src={img2} alt="" />
                        <p className='text-[14px] font-medium mt-[40px]'>20hr 45m</p>
                        <h2 className='text-[22px] font-semibold mt-[10px]'>AI: Complete Artificial Intelligence Course</h2>

                        <p className='text-[16px] font-medium textWhite mt-[17px]'>by <span className='text-white font-semibold'>Joe Root</span></p>

                        <div className='mt-[17px] flex justify-between items-center'>
                            <div className=' flex gap-[10px] items-center'>

                                <div className='star w-[72px]  flex rounded-[16px]  py-[6px] px-[16px] items-center gap-[6px]'>
                                    <img src={star} className='w-[13px] h-[12px]' alt="" />
                                    <p className='text-[14px] font-semibold'>4.8</p>

                                </div>
                                <p className=''>(4,563)</p>


                            </div>

                            <div>
                                <p className='font-bold text-[20px]'>$134</p>
                            </div>
                        </div>

                    </div>
                    {/* 3 */}
                    <div className='VideoBox hover:bg-primary hover:text-white lg:w-[370px] p-5'>

                        <img src={img3} alt="" />
                        <p className='text-[14px] font-medium mt-[40px] '>20hr 45m</p>
                        <h2 className='text-[22px] font-semibold mt-[10px]'>BC: Complete Block Chain Programming Course </h2>

                        <p className='text-[16px] font-medium  mt-[17px]'>by <span className=' font-semibold'>Joe Root</span></p>

                        <div className='mt-[17px] flex justify-between items-center'>
                            <div className=' flex gap-[10px] items-center'>

                                <div className='pinkBg w-[72px]  flex rounded-[16px]  py-[6px] px-[16px] items-center gap-[6px]'>
                                    <img src={star} className='w-[13px] h-[12px]' alt="" />
                                    <p className='text-[14px] font-semibold'>4.8</p>

                                </div>
                                <p className=''>(4,563)</p>


                            </div>

                            <div>
                                <p className='font-bold text-[20px]'>$134</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='mt-[30px] lg:flex gap-[30px]'>
                    {/* 4 */}
                    <div className='VideoBox hover:bg-primary hover:text-white lg:w-[370px] p-5'>

                        <img src={img4} alt="" />
                        <p className='text-[14px] font-medium mt-[40px] '>20hr 45m</p>
                        <h2 className='text-[22px] font-semibold mt-[10px]'>Learn Python: Complete Python Programming Course </h2>

                        <p className='text-[16px] font-medium  mt-[17px]'>by <span className=' font-semibold'>Joe Root</span></p>

                        <div className='mt-[17px] flex justify-between items-center'>
                            <div className=' flex gap-[10px] items-center'>

                                <div className='pinkBg w-[72px]  flex rounded-[16px]  py-[6px] px-[16px] items-center gap-[6px]'>
                                    <img src={star} className='w-[13px] h-[12px]' alt="" />
                                    <p className='text-[14px] font-semibold'>4.8</p>

                                </div>
                                <p className=''>(4,563)</p>


                            </div>

                            <div>
                                <p className='font-bold text-[20px]'>$134</p>
                            </div>
                        </div>

                    </div>
                    {/* 5 */}
                    <div className='lg:my-0 hover:bg-primary hover:text-white my-[30px] VideoBox lg:w-[370px] p-5'>

                        <img src={img5} alt="" />
                        <p className='text-[14px] font-medium mt-[40px] '>20hr 45m</p>
                        <h2 className='text-[22px] font-semibold mt-[10px]'>Design: Complete UI/UX Design Course</h2>

                        <p className='text-[16px] font-medium  mt-[17px]'>by <span className=' font-semibold'>Joe Root</span></p>

                        <div className='mt-[17px] flex justify-between items-center'>
                            <div className=' flex gap-[10px] items-center'>

                                <div className='pinkBg w-[72px]  flex rounded-[16px]  py-[6px] px-[16px] items-center gap-[6px]'>
                                    <img src={star} className='w-[13px] h-[12px]' alt="" />
                                    <p className='text-[14px] font-semibold'>4.8</p>

                                </div>
                                <p className=''>(4,563)</p>


                            </div>

                            <div>
                                <p className='font-bold text-[20px]'>$134</p>
                            </div>
                        </div>

                    </div>
                    {/* 6 */}
                    <div className='VideoBox hover:bg-primary hover:text-white lg:w-[370px] p-5'>

                        <img src={img6} alt="" />
                        <p className='text-[14px] font-medium mt-[40px] '>20hr 45m</p>
                        <h2 className='text-[22px] font-semibold mt-[10px]'>AW: Complete Artwork Programming Course</h2>

                        <p className='text-[16px] font-medium  mt-[17px]'>by <span className=' font-semibold'>Joe Root</span></p>

                        <div className='mt-[17px] flex justify-between items-center'>
                            <div className=' flex gap-[10px] items-center'>

                                <div className='pinkBg w-[72px]  flex rounded-[16px]  py-[6px] px-[16px] items-center gap-[6px]'>
                                    <img src={star} className='w-[13px] h-[12px]' alt="" />
                                    <p className='text-[14px] font-semibold'>4.8</p>

                                </div>
                                <p className=''>(4,563)</p>


                            </div>

                            <div>
                                <p className='font-bold text-[20px]'>$134</p>
                            </div>
                        </div>

                    </div>



                </div>

                <div className='flex justify-center mt-[50px]'>
                    <button className='lg:w-[221px] w-full h-[60px] bg-primary rounded-[29px] text-[16px] font-semibold text-white hover:bg-red-800'>Explore All Courses</button>
                </div>




            </div>

        </>
    );
};

export default OnlineCourses;