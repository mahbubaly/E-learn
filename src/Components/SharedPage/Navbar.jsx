import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import '../SharedPage/Style.css'
import { Link } from 'react-scroll';

const Navbar = () => {
    const navbar = <>

        <Link to='courses'   className='' onClick={() => setOpen(!open)} >





            <button  className="hover:text-primary text-[16px] font-medium text-[#002626] py-[14px] px-[14px]">Courses</button>


        </Link>

        <Link to='About'  className='' onClick={() => setOpen(!open)} >





            <button className="hover:text-primary text-[16px] font-medium text-[#002626] py-[14px] px-[14px]">About</button>




        </Link>


        <Link to='blogs'  onClick={() => setOpen(!open)}  >




            <button className="hover:text-primary text-[16px] font-medium text-[#002626] py-[14px] px-[14px]">Blog</button>


        </Link>
        <Link   onClick={() => setOpen(!open)}  >




            <button className="hover:text-primary text-[16px] font-medium text-[#002626] py-[14px] px-[14px]">Page</button>


        </Link>

        <div className='lg:hidden flex flex-col'>
            <Link   >




                <button className="hover:text-primary text-[16px] font-medium text-[#002626] py-[14px] px-[18px]">Log In</button>


            </Link>

            <Link   >




                <button className=" signIn text-[16px] hover:bg-red-400 hover:text-white font-semibold  py-[14px] px-[28px]">Sign Up</button>


            </Link>
        </div>










    </>
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div className='container mx-auto  lg:p-0 p-5 ' >
                <div className='flex items-center justify-between lg:mt-[30px] 2xl:mt-[30px]'>

                    <div>
                        <Link to='/' className='text-primary font-bold  text-[18px] lg:text-[30px]  '>E-Learn</Link>

                    </div>




                    <div className="flex items-center gap-[20px]">



                        <div className="hidden lg:block">
                            <nav aria-label="">
                                <ul className="flex items-center gap-[20px] text-sm">
                                    {navbar}
                                </ul>
                            </nav>
                        </div>









                        {/* Mobile */}

                        <div className={`block bg-white lg:hidden   lg:col-span-3  absolute lg:static lg:w-auto top-0 left-0 overflow-hidden h-full lg:h-auto duration-500    lg:bg-[transparent] lg:p-0 z-50  ${open ? "w-full  p-5" : "w-0"}`}>

                            <div className='flex  justify-between'>
                                <ul className='flex  flex-col  '>

                                    {navbar}



                                </ul>

                                <FaTimes onClick={() => setOpen(!open)} className='w-[24px] h-[24px] text-primary' />
                            </div>
                        </div>



                        <button onClick={() => setOpen(!open)} className='block lg:hidden'>{open ? <> </> : <FaBars className='w-[24px] h-[24px] text-primary' />}</button>
                    </div>





                    <div className='lg:block hidden'>

                        <Link  onClick={() => setOpen(!open)}  >




                            <button className="hover:text-primary text-[16px] font-medium text-[#002626] py-[14px] px-[18px]"><span>Log In</span></button>


                        </Link>

                        <Link onClick={() => setOpen(!open)}  >




                            <button className="signIn text-[16px] hover:bg-red-400 hover:text-white font-semibold  py-[14px] px-[28px]"><span>Sign Up</span></button>


                        </Link>


                    </div>
                </div>


            </div>

        </div>
    );
};

export default Navbar;