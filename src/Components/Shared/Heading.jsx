

const Heading = ({children, cssClass}) => {
  return (
    <h2 className={`xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl  font-bold md:text-balance text-heading text-wrap ${cssClass}`}>
      {children}
    </h2>
  );
};

export default Heading;