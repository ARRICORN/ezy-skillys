

const Title = ({children, cssClass}) => {
  return (
    <> 
      <p className={`whitespace-pre-wrap md:text-lg text-base font-bold   ${cssClass} `}>{children}</p>
    </>
  );
};

export default Title;