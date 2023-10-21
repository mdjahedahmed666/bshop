import { useEffect, useState } from "react";
import { Link} from "react-router-dom";

const BrandType = () => {
  const [brandType, setBrandType] = useState([]);

  useEffect(() => {
    fetch("/brandData.json")
      .then((res) => res.json())
      .then((data) => setBrandType(data));
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-32 mt-16">
      <div className="mb-10 text-2xl font-rancho font-bold text-center">
        <h2>Explore Category</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {brandType.map((brand, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl image-full md:hover:scale-125 transition-transform duration-700 hover:z-10"
          >
            <figure>
              <img src={brand.image} alt={brand.name} />
            </figure>
            <div className="card-body flex items-center justify-center">
              <div style={{ textAlign: "center" }}>
                <div className="mb-2">
                  <h2 className="font-bold text-2xl font-rancho">
                    {brand.name}
                  </h2>
                  <p className="font-raleway mt-2">{brand.shortDescription}</p>
                </div>
              </div>
              <Link to={`/products/${brand.name}`} className="card-actions justify-center">
                <button className="btn font-rancho">Explore</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandType;
