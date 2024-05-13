import Image from 'next/image';
import React from 'react';
import banner from '/public/registerPage-img.png'
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const registerPage = () => {
    return (
        <div className='max-w-7xl mx-auto px-5'>
            <div className='min-h-screen flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 items-center gap-5'>
                    <div className='md:col-span-2'>
                        <div className='p-8 shadow-xl rounded-3xl'>
                            <h3 className='text-2xl font-semibold text-center'>
                                <span className='text-[#004aad]'>Create </span>
                                <span className='text-orange-500'>Account</span>
                            </h3>
                            <div className='mt-8 mb-5'>
                                <div className="relative mt-6">
                                    <input autocomplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-9 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name" />
                                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-[#B1B1B1] peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Name</label>
                                </div>

                                <div className="relative mt-6">
                                    <input autocomplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-9 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-[#B1B1B1] peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Email Address</label>
                                </div>

                                <div className="relative mt-6">
                                    <input autocomplete="off" id="password" name="password" type="text" className="peer placeholder-transparent h-9 w-full border-b border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                    <label htmlFor="password" className="absolute left-0 -top-3.5 text-[#B1B1B1] peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-xs">Password</label>
                                </div>

                                <div className="mt-2 flex items-center text-gray-500">
                                    <input type="checkbox" id="remember" name="remember" className="mr-1" />
                                    <label className="text-sm" for="remember">Remember me</label>
                                </div>

                            </div>
                            <div className='space-y-3 mt-3'>
                                <div className='flex justify-center'>
                                    <button className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-md shadow-lg font-semibold py-1 px-2.5 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-800 border-b-blue-950 disabled:border-0 disabled:bg-blue-500 disabled:text-white ring-white text-white border-b-4 active:border-0 hover:text-gray-100 active:bg-blue-900 active:text-gray-300 focus-visible:outline-blue-900 text-sm sm:text-base"
                                    >
                                        Create Account
                                    </button>
                                </div>
                                <h5 className='text-gray-500 text-sm text-center'>Already Created? <Link className='text-gray-700' href='/login'>Login Here</Link></h5>
                            </div>
                            <div className='flex justify-center items-center my-5'>
                                <div className="flex flex-row flex-nowrap justify-center mx-auto items-center">
                                    <span className="flex-grow block border-t border-gray-300 w-14"></span>
                                    <h2 className="flex-none block mx-2 px-2 py-2.5 text-sm leading-none uppercase text-gray-500 font-medium">
                                        Or
                                    </h2>
                                    <span className="flex-grow block border-t border-gray-300 w-14" aria-hidden="true" role="presentation"></span>
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-center space-x-4 mt-3">
                                    <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                                        <FcGoogle className='text-2xl mr-3' />
                                        Google
                                    </button>
                                    <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                                        <FaGithub className='text-2xl mr-3 text-black' />
                                        Google
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className='md:col-span-2 lg:col-span-3 hidden md:block'>
                        <Image src={banner} height={700} width={650} alt='register banner' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default registerPage;