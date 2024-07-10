const SubTitle = ({ children, cssClass }) => {
  return (
    <>
      <p className={` text-balance md:text-lg sm:text-base text-sm ${cssClass}`}>
        {children}
      </p>
    </>
  );
};

export default SubTitle;
