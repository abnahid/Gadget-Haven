/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useTitle } from "./Utils/Utils";

const Gadget = ({ gadget }) => {
  useTitle("Home");
  if (!gadget) {
    return (
      <div className="flex justify-center items-center min-h-[80vh]">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  const { product_id, product_title, product_image, price } = gadget;
  return (
    <section className="mt-2 h-full p-5 bg-white rounded-2xl">
      <div className="w-52 h-52 mx-auto rounded-xl">
        <img
          className="w-full h-full object-cover"
          src={product_image}
          alt={product_title}
        />
      </div>
      <h2 className="text-xl  xl:text-2xl font-semibold mt-2">
        {product_title}
      </h2>
      <p className="text-gray-500 my-1 pb-3">
        price: <span>{price}K</span>
      </p>
      <div className="pb-3">
        <Link
          to={`/gadgets/${product_id}`}
          className="border-2 border-primary py-2 px-4 rounded-full"
        >
          View Details
        </Link>
      </div>
    </section>
  );
};

export default Gadget;
