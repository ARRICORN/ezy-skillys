

import logo from '../../../assests/image1.png'
import men from '../../../assests/image22.png'
import job from '../../../assests/image23.png'
import it from '../../../assests/image28.png'
import it2 from '../../../assests/image29.png'
import notCoding from '../../../assests/image24.png'
import frontEnd from '../../../assests/image25.png'
import backend from '../../../assests/image27.png'
import fullstack from '../../../assests/image26.png'
import group1 from '../../../assests/Group1.png'
import group2 from '../../../assests/Group2.png'
import ornaments from '../../../assests/Ornament3.png'
import elipse from '../../../assests/Ellipse1.png'
import Image from 'next/image'
import styles from './courseSelector.module.css'

const Course = () => {
    return (
        <div className="w-full px-6 relative">
            <div className="w-full lg:w-10/12 mx-auto my-12 px-5 relative">
                <Image src={group1} alt="" className='absolute top-32 left-[-20px] ' />
                <Image src={ornaments} alt="" className='w-[30px] absolute top-80 right-[-50px] ' />
                <Image src={ornaments} alt="" className='w-[30px] absolute left-[-20px] top-2/4  ' />
                <Image src={group1} alt="" className='absolute top-32 left-[-20px] -z-10' />
                <Image src={group2} alt="" className='w-[30px] absolute bottom-1/3 right-[-56px] ' />
                <Image src={elipse} alt="" className='w-36 absolute bottom-[-56px] right-[-2px] md:right-0 ' />
                <div>

                    <h1 className="text-primary text-5xl pb-5 font-extrabold text-center">Choose The <span className="text-secondary">Course</span></h1>
                    {/* main section */}
                    <main className="bg-primary rounded-xl p-6 lg:p-16 relative">
                        <div className='grid grid-cols-8' >

                            <div className='col-span-8 md:col-span-5 relative'>
                                {/* Welcome part */}
                                <div>
                                    <div className="flex flex-col md:flex-row items-center">

                                        <Image className='mr-1' src={logo} alt="" />
                                        <div className='flex mt-3 md:0 '>
                                            <div className={styles.triangle} class="triangle-left">
                                            </div>
                                            <div className='bg-white px-5 w-full lg:w-[457px] py-3 rounded-lg rounded-tl-none'>

                                                <p className='font-semibold text-xl'>Welcome, Prasad. <br />
                                                    Let us know your current status?</p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* icons */}
                                    <div className='flex justify-center gap-2 lg:gap-7  ml-5 lg:ml-24 pt-5 '>
                                        <div>

                                            <button className="border-2 border-white bg-white p-5 rounded-3xl">
                                                <Image src={men} alt="job" /></button>

                                            <p className='text-white mt-1 text-center'>Looking for <br /> job</p>
                                        </div>
                                        <div>

                                            <button className="border-2 border-white p-5 rounded-3xl"><Image src={it} alt="job" /></button>

                                            <p className='text-white mt-1 text-center'>IT to Non IT<br />
                                                Job Shift</p>
                                        </div>
                                        <div>
                                            <button className="border-2 border-white p-5 rounded-3xl">
                                                <Image src={job} alt="job" />
                                            </button>
                                            <p className='text-white mt-1 text-center'>Upskill It</p>
                                        </div>



                                    </div>
                                </div>



                                {/* Great part */}
                                <div className=''>
                                    <div className="flex flex-col md:flex-row items-center    my-5 relative">
                                        <Image className='mr-8 ' src={logo} alt="" />



                                        <div className='flex  relative' >
                                            <div className={`${styles.triangle} absolute triangle-left -ml-5  md:-ml-10 top-8 `} >
                                            </div>



                                            <div className=' w-full md:w-[470px] ml-5 md:ml-0'>

                                                <div className='bg-white px-4 mt-8 text-xl font-semibold  rounded-xl rounded-tl-none py-4'>
                                                    <p className='bg-yellow-500'>Great ! Let me help you</p>
                                                </div>

                                                <div className='flex  justify-between md:justify-start '>
                                                    <button className='px-3 md:px-8 mt-4 py-4 rounded-lg text-white bg-secondary'>Discover Course</button>
                                                    <button className='px-4 md:px-8 ml-4 py-4 md:py-0 mt-4 rounded-lg text-white border-2'>Suggest Course</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                {/* selecct field part */}
                                <div>
                                    <div className="flex flex-col md:flex-row gap-8 items-center  mb-5">
                                        <Image className=' ' src={logo} alt="" />
                                        <div>
                                            <div>
                                                <div className='bg-white mt-0 md:mt-6  text-xl font-semibold pe-5 md:pe-28 rounded-xl py-4 '>
                                                    <p className='bg-yellow-500 px-5'>Select the field you’re interested</p>
                                                </div>

                                                <div className='w-full flex px-3 md:px-0'>
                                                    <button className='px-4  md:px-16 mt-4 py-4 rounded-lg text-white bg-secondary'>IT Field</button>
                                                    <button className='px-4 md:px-12 ml-4 py-0 mt-4 md:py-3 rounded-lg text-white border-2'>Non IT Field</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>


                                {/* it field part */}
                                <div className='mt-7 relative'>
                                    <div className="flex flex-col md:flex-row  justify-start gap-8 items-center">
                                        <Image className=' ' src={logo} alt="" />

                                        <div className='ml-1 '>
                                            <div className={`${styles.triangle} absolute top-[126px] md:top-[7px] -ml-10`} > </div>


                                            <div className='bg-white px-8 w-full md:w-[460px] py-3 rounded-lg rounded-tl-none'>
                                                <p className='font-semibold text-xl'>IT Field, then what do you <br />
                                                    prefer now?</p>
                                            </div>
                                        </div>

                                    </div>
                                    {/* icons */}
                                    <div className='flex justify-start ml-3 md:ml-32 gap-8 py-5'>

                                        <div>
                                            <button className="border-2 bg-white border-white p-5 rounded-3xl">
                                                <Image src={it2} alt="job" />
                                            </button>
                                            <p className='text-white mt-1 text-center'>Coding</p>
                                        </div>
                                        <div>
                                            <button className="border-2 border-white p-5 rounded-3xl">
                                                <Image src={notCoding} alt="job" />
                                            </button>
                                            <p className='text-white mt-1 text-center'>Not Coding</p>
                                        </div>



                                    </div>
                                </div>

                                {/* choose coding part */}
                                <div>
                                    <div className="flex gap-9 flex-col md:flex-row mt-3  items-center relative">
                                        <Image className='mb-0 md:mb-32 ' src={logo} alt="" />
                                        <div className=''>
                                            <div className={`${styles.triangle} absolute triangle-left -ml-10 top-[130px]  md:top-0`} >

                                            </div>
                                            <div className='bg-white px-5  py-3 w-full md:w-[457px] rounded-lg rounded-tl-none'>
                                                <p className='font-semibold text-xl'>Wow, you chose coding. <br />
                                                    What’s next??</p>
                                            </div>



                                            {/* icons */}
                                            <div className='flex justify-start ml-2 gap-5 md:gap-11 pt-5 '>
                                                <div>
                                                    <button className="border-2 border-white bg-white p-5 rounded-3xl">
                                                        <Image src={frontEnd} alt="job" />
                                                    </button>
                                                    <p className='text-white mt-1 text-center'>Front-End</p>
                                                </div>
                                                <div>
                                                    <button className="border-2 border-white p-5 rounded-3xl">
                                                        <Image src={backend} alt="job" />
                                                    </button>
                                                    <p className='text-white mt-1 text-center'>Backend</p>
                                                </div>
                                                <div>
                                                    <button className="border-2 border-white p-5 rounded-3xl">
                                                        <Image src={fullstack} alt="job" />
                                                    </button>
                                                    <p className='text-white mt-1 text-center'>Full Stack</p>
                                                </div>



                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* click next to part */}

                                <div className='relative'>
                                    <div className="flex gap-9 flex-col md:flex-row my-5  items-center relative">
                                        <Image className='mb-0 md:mb-4 ' src={logo} alt="" />

                                        <div>
                                            <div className={`${styles.triangle} absolute triangle-left -ml-10 md:-ml-10 top-18 md:top-0`} >

                                            </div>
                                            <div>
                                                <div className='bg-white  px-4 text-xl font-semibold pe-42 rounded-xl w-full rounded-tl-none py-4'>
                                                    <p className='bg-yellow-500 w-full md:w-[440px]'>Excellent! Click next to get into</p>
                                                </div>

                                                <button className='px-6 mt-4 py-2 rounded-lg text-white bg-secondary'>Next</button>

                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className="col-span-8 md:col-span-3">

                            </div>



                        </div>
                    </main>
                </div>
            </div >
        </div >
    );
};

export default Course;
