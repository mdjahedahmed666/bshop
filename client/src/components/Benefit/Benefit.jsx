import { CiDeliveryTruck } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { AiFillWechat } from "react-icons/ai";

const Benefit = () => {
  return (
    <div className="bg-base-200 container mx-auto px-4 md:px-32 mt-16">
      <div className="grid md:grid-cols-3 gap-4">
        <div
          className="p-10"
          style={{ textAlign: "center" }}
        >
          <div className="text-center">
            <div className="text-center" style={{ textAlign: "center" }}>
              <CiDeliveryTruck className="text-6xl mx-auto" />
            </div>
            <h2 className=" font-rancho text-lg font-bold">Free Delivery</h2>
            <p>And free returns. See checkout for delivery dates.</p>
          </div>
        </div>
        <div className="p-10" style={{ textAlign: "center" }}>
          <div className="text-center">
            <MdPayment className="text-6xl mx-auto" />
            <h2 className=" font-rancho text-lg font-bold">Safe Payment</h2>
            <p>Pay with the world’s most popular and secure payment methods.</p>
          </div>
        </div>
        <div className="p-10" style={{ textAlign: "center" }}>
          <div className="text-center">
            <AiFillWechat className="text-6xl mx-auto" />
            <h2 className=" font-rancho text-lg font-bold">24/7 Help Center</h2>
            <p>Have a question? Call a Specialist or chat online.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
