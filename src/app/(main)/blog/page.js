import React from 'react';

const BlogPage = () => {
    console.log('this is env data'+process.env.GITHUB_ID);
    return (
        <div>
           Hi from Blog
        </div>
    );
};

export default BlogPage;