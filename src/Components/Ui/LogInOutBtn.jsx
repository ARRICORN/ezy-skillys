'use client'
import Cookies from 'js-cookie';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const LogInOutBtn = () => {
    const { status } = useSession();
    console.log(status, "==status from loginbtn");
    const session = useSession();
    console.log(session, "==session from loginbtn");
    

    useEffect(() => {
        if (session?.data?.token) {
          Cookies.remove("custom-token");
        }
    }, [session]);
    
    const handleLogout = () => {

        
        toast.success('You successfully logged out', {
            
             duration: 2000,
        });
        setTimeout(() => {
            signOut()
       
          }, 1000);
     }


    return (
        <div>
            {status == 'authenticated' ?
                <button onClick={handleLogout} className="px-10 py-2 rounded-md text-[#FF8B36] border-[#FF8B36] border-2"
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
