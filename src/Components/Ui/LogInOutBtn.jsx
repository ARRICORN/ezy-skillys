'use client'
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const LogInOutBtn = () => {
    const { status } = useSession();
    console.log(status, "==status from loginbtn");
    const session = useSession();
    console.log(session, "==session from loginbtn");
    
    return (
        <div>
            {status == 'authenticated'  ?
                <button onClick={signOut} className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-md shadow-lg font-semibold py-1 px-2.5 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-800 border-b-blue-950 disabled:border-0 disabled:bg-blue-500 disabled:text-white ring-white text-white border-b-4 active:border-0 hover:text-gray-100 active:bg-blue-900 active:text-gray-300 focus-visible:outline-blue-900 text-sm sm:text-base"
                >
                    Logout
                </button> :
                <Link href='/login' className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-md shadow-lg font-semibold py-1 px-2.5 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-800 border-b-blue-950 disabled:border-0 disabled:bg-blue-500 disabled:text-white ring-white text-white border-b-4 active:border-0 hover:text-gray-100 active:bg-blue-900 active:text-gray-300 focus-visible:outline-blue-900 text-sm sm:text-base"
                >
                    LogIn
                </Link>}
        </div>
    );
};

export default LogInOutBtn;