

const Cover = ({img,headding,subHeadding,height}) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage:
          `url(${img})`,
          height:height
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="md:py-32 md:px-96 bg-black/30 text-white bg-opacity-30">
          <h1 className="mb-5 uppercase text-5xl font-bold">{headding}</h1>
          <p className="mb-5 uppercase">
           {subHeadding}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Cover;
