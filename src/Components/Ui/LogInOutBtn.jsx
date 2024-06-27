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
            {status == 'authenticated' ?
                <button onClick={signOut} className="px-10 py-2 rounded-md text-[#FF8B36] border-[#FF8B36] border-2"
                >
                    Logout
                </button> :
                <Link href='/login' className="px-10 py-2 rounded-md text-[#FF8B36] border-[#FF8B36] border-2"
                >
                    LogIn
                </Link>}
        </div>
    );
};

export default LogInOutBtn;