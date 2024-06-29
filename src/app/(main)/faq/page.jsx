import React from 'react';
import wave from '@/assets/faqWave.svg'
import Image from 'next/image';
import waveCircle from '@/assets/CircleBg.png'
import Faq from '@/Components/Faq/Faq';
import sideShape from '@/assets/beads1.png'

export const metadata = {
    title: "Eazy-Skill | faq",
    description: "Eazy-Skill faq page",
  };

const FaqPage = () => {
    
    return (
        <div>
            <div>
                <div className='bg-[#F98149] h-96  md:h-[450px] lg:h-[480px] -mt-32 pt-40 w-full'>
                    <h1 className='text-3xl font-poppins font-medium text-center text-white'>Frequently Asked Questions</h1>
                </div>
                <div>
                    <Image src={wave} width={50} height={50} className='w-full -mt-12 md:-mt-24' alt='wave'></Image>
                </div>


                <div className='w-5/6 md:w-4/5 lg:w-3/4 mx-auto p-5 relative bg-white min-h-96 rounded-2xl -mt-32 md:-mt-52 lg:-mt-72 shadow-md bg-transparent mb-32'>

                    <div className='md:p-5'>
                        <Faq />
                    </div>

                    <Image src={waveCircle} width={50} height={50} className='size-20 lg:size-24 absolute bottom-0 right-0 -z-20 -mr-8 -mb-8' alt='waveCircle'></Image>

                    <Image src={sideShape} width={50} height={50} className='w-12 h-auto absolute top-1/2 left-0 -ml-20' alt='waveCircle'></Image>

                </div>

            </div>
        </div>
    );
};

export default FaqPage;