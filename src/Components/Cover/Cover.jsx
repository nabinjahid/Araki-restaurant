const Cover = ({ img, headding, subHeadding, height }) => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${img})`,
        height: height,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="md:w-9/12 bg-black/30 text-center md:px-24 md:py-28">
        <div className="text-white">
          <h1 className="mb-5 uppercase text-5xl font-bold">{headding}</h1>
          <p className="mb-5 text-center">{subHeadding}</p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
