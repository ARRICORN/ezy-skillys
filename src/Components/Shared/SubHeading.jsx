const SubHeading = ({children, cssClass}) => {
  return (
    <>
      <h2
        className={`xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-bold md:text-balance text-heading text-wrap  ${cssClass} `}
      >
        {children}
      </h2>
    </>
  );
};

export default SubHeading;
