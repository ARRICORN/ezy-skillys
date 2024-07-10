'use client'
import { useSession } from 'next-auth/react';
import React from 'react';

const BlogPage = () => {
    const session = useSession();
    console.log(session.data);
    return (
        <div>
           Hi from Blog
        </div>
    );
};

export default BlogPage;