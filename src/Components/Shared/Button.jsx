import React from 'react';

const Button = ({children, cssClass}) => {
  return (
    <button className={`${cssClass} md:text-base md:py-2 py-1 text-sm  rounded-md`}>
      {children}
    </button>
  );
};

export default Button;