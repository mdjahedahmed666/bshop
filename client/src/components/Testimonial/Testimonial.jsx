const Testimonial = ({testimonial}) => {

  return (
    <div className="container mx-auto px-4 md:px-32 mt-16">
      <div className="carousel w-full md:h-[500px]">
        {testimonial.map((test,index) =>(
          <div
          id={test.id}
          key={index}
          className="carousel-item relative w-full grid text-center flex justify-center items-center"
        >
          <div className="text-center">
            <h2 className="text-5xl mb-10 font-rancho text-2xl font-medium">
              {test.title}
            </h2>
            <div className="w-20 h-20 mx-auto mb-10">
              <img
                className="w-20 h-20 rounded-full mx-auto"
                src={test.image_url}
                alt=""
              />
            </div>
            <p className="mb-5 text-lg font-raleway w-96 text-gray-400">
              {test.message}
            </p>
            <div>
              <h4 className="font-rancho">{test.name}</h4>
              <p>{test.address}</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#${test.id-1}`} className="btn btn-circle">
              ❮
            </a>
            <a href={`#${test.id+1}`} className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        ))}
        {/* <div
          id="slide2"
          className="carousel-item relative w-full grid text-center flex justify-center items-center"
        >
          <div className="text-center">
            <h2 className="text-5xl mb-10 font-rancho text-2xl font-medium">
              Testimonial
            </h2>
            <div className="w-20 h-20 mx-auto mb-10">
              <img
                className="w-20 h-20 rounded-full mx-auto"
                src="https://i.ibb.co/bzqcDCV/download-1.jpg"
                alt=""
              />
            </div>
            <p className="mb-5 text-lg font-raleway w-96 text-gray-400">
              It is a wonderful watch. I did not make the mistake of spending a
              sum of money to own it. Thank you Brand shop for the best{" "}
            </p>
            <div>
              <h4 className="font-rancho">Fariha Anjum</h4>
              <p>Sylhet</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative w-full grid text-center flex justify-center items-center"
        >
          <div className="text-center">
            <h2 className="text-5xl mb-10 font-rancho text-2xl font-medium">
              Testimonial
            </h2>
            <div className="w-20 h-20 mx-auto mb-10">
              <img
                className="w-20 h-20 rounded-full mx-auto"
                src="https://i.ibb.co/bzqcDCV/download-1.jpg"
                alt=""
              />
            </div>
            <p className="mb-5 text-lg font-raleway w-96 text-gray-400">
              It is a wonderful watch. I did not make the mistake of spending a
              sum of money to own it. Thank you Brand shop for the best{" "}
            </p>
            <div>
              <h4 className="font-rancho">Md Jubed Miah</h4>
              <p>Sylhet</p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
