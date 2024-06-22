const HeadingColor = ({ children, cssClass, first, second }) => {
  return (
    <h2
      className={`xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl  font-bold md:text-balance text-headingColor text-wrap ${cssClass}`}
    >
      <span>
        <span className={`${first}`}>Our </span>
        <span className={`${second}`}> {children}</span>
      </span>
    </h2>
  );
};

export default HeadingColor;
