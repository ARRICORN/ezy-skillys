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
        <div className="w-11/12 lg:w-10/12 mx-auto my-12 px-5 relative ">
            <Image src={group1} alt="" className='absolute top-32 left-[-20px] -z-10' />
            <Image src={ornaments} alt="" className='w-[30px] absolute top-80 right-[-50px] ' />
            <Image src={ornaments} alt="" className='w-[30px] absolute left-[-20px] top-2/4  ' />
            <Image src={group1} alt="" className='absolute top-32 left-[-20px] -z-10' />
            <Image src={group2} alt="" className='w-[30px] absolute bottom-1/3 right-[-56px] ' />
            <Image src={elipse} alt="" className='w-36 absolute bottom-[-56px] right-[-55px]  -z-20' />
            <div>

                <h1 className="text-primary text-5xl pb-5 font-extrabold text-center">Choose The <span className="text-secondary">Course</span></h1>
                {/* main section */}
                <main className="bg-primary rounded-xl p-16 ">
                    <div className='grid grid-cols-8' >

                        <div className='col-span-5 relative'>
                            {/* Welcome part */}
                            <div>
                                <div className="flex flex-col md:flex-row items-center">
                                    <Image className='mr-1' src={logo} alt="" />

                                    <div className={styles.triangle} class="triangle-left">

                                    </div>
                                    <div className='bg-white px-5 w-full py-3 rounded-lg rounded-tl-none'>

                                        <p className='font-semibold text-xl'>Welcome, Prasad. <br />
                                            Let us know your current status?</p>
                                    </div>

                                </div>
                                {/* icons */}
                                <div className='flex justify-center gap-7 ml-24 pt-5 '>
                                    <div>
                                        <div className="border-2 border-white bg-white p-5 rounded-3xl">
                                            <Image src={men} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>Looking for <br /> job</p>
                                    </div>
                                    <div>
                                        <div className="border-2 border-white p-5 rounded-3xl">
                                            <Image src={it} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>IT to Non IT<br />
                                            Job Shift</p>
                                    </div>
                                    <div>
                                        <div className="border-2 border-white p-5 rounded-3xl">
                                            <Image src={job} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>Upskill It</p>
                                    </div>



                                </div>
                            </div>



                            {/* Great part */}
                            <div className=''>
                                <div className="flex items-center    my-5 relative">
                                    <Image className='mr-8' src={logo} alt="" />
                                    <div className={`${styles.triangle} absolute triangle-left ml-24 top-8`} >

                                    </div>
                                    <div >
                                        <div className='bg-white px-4 mt-8 text-xl font-semibold  rounded-xl py-4 w-[470px]'>
                                            <p className='bg-yellow-500'>Great ! Let me help you</p>
                                        </div>

                                        <button className='px-8 mt-4 py-4 rounded-lg text-white bg-secondary'>Discover Course</button>
                                        <button className='px-8 ml-4 py-3 rounded-lg text-white border-2'>Suggest Course</button>
                                    </div>
                                </div>


                            </div>
                            {/* selecct field part */}
                            <div>
                                <div className="flex gap-8 items-center  mb-5">
                                    <Image className=' ' src={logo} alt="" />
                                    <div>
                                        <div className='bg-white  mt-6  text-xl font-semibold pe-28 rounded-xl py-4 '>
                                            <p className='bg-yellow-500 px-5'>Select the field you’re interested</p>
                                        </div>

                                        <button className='px-8 mt-4 py-4 rounded-lg text-white bg-secondary'>IT Field</button>
                                        <button className='px-8 ml-4 py-3 rounded-lg text-white border-2'>Non IT Field</button>
                                    </div>
                                </div>


                            </div>

                            {/* it field part */}
                            <div>
                                <div className="flex  items-center">
                                    <Image className=' ' src={logo} alt="" />
                                    <div className={styles.triangle} class="triangle-left"> </div>


                                    <div className='bg-white px-8 w-full py-3 rounded-lg rounded-tl-none'>
                                        <p className='font-semibold text-xl'>IT Field, then what do you <br />
                                            prefer now?</p>
                                    </div>

                                </div>
                                {/* icons */}
                                <div className='flex justify-items-start ml-32 gap-8 py-10'>

                                    <div>
                                        <div className="border-2 bg-white border-white p-5 rounded-3xl">
                                            <Image src={it2} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>Coding</p>
                                    </div>
                                    <div>
                                        <div className="border-2 border-white p-5 rounded-3xl">
                                            <Image src={notCoding} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>Not Coding</p>
                                    </div>



                                </div>
                            </div>

                            {/* choose coding part */}
                            <div>
                                <div className="flex gap-9 items-center relative">
                                    <Image className=' ' src={logo} alt="" />
                                    <div className={`${styles.triangle} absolute triangle-left ml-24 top-[7px]`} >

                                    </div>
                                    <div className='bg-white px-5 py-3 w-full rounded-lg'>
                                        <p className='font-semibold text-xl'>Wow, you chose coding. <br />
                                            What’s next??</p>
                                    </div>

                                </div>

                                {/* icons */}
                                <div className='flex justify-center ml-24 gap-11 pt-5 '>
                                    <div>
                                        <div className="border-2 border-white bg-white p-5 rounded-3xl">
                                            <Image src={frontEnd} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>Front-End</p>
                                    </div>
                                    <div>
                                        <div className="border-2 border-white p-5 rounded-3xl">
                                            <Image src={backend} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>Backend</p>
                                    </div>
                                    <div>
                                        <div className="border-2 border-white p-5 rounded-3xl">
                                            <Image src={fullstack} alt="job" />
                                        </div>
                                        <p className='text-white mt-1 text-center'>Full Stack</p>
                                    </div>



                                </div>
                            </div>
                            {/* click next to part */}

                            <div>
                                <div className="flex gap-9  my-5  items-center relative">
                                    <Image className='mb-4 ' src={logo} alt="" />

                                    <div className={`${styles.triangle} absolute triangle-left ml-24 top-0`} >

                                    </div>
                                    <div>
                                        <div className='bg-white  px-4 text-xl font-semibold pe-42 rounded-xl w-full rounded-tl-none py-4'>
                                            <p className='bg-yellow-500 w-[440px]'>Excellent! Click next to get into</p>
                                        </div>

                                        <button className='px-6 mt-4 py-2 rounded-lg text-white bg-secondary'>Next</button>

                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="col-span-3">

                        </div>



                    </div>
                </main>
            </div>
        </div>
    );
};

export default Course;


