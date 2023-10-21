import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Benefit from "../../components/Benefit/Benefit";
import BrandType from "../../components/BrandType/BrandType";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("/testimonialData.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);
  
  return (
    <div className="dark:bg-black">
      <Banner/>
      <BrandType/>
      <Benefit/>
      <div>
      <Testimonial testimonial={testimonial}/>
      </div>
    </div>
  )
}

export default Home;