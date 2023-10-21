const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/mD706L2/maxim-hopman-Hin-rzh-Od-Ws-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold font-rancho">Explore what you need</h1>
            <p className="mb-5 text-xl font-raleway">
              The best way to buy the products you love. 
            </p>
            <button className="btn btn-[#000] font-rancho">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
