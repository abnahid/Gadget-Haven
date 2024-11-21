import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-10 w-11/12 mx-auto mt-12">
      <div className="flex flex-col justify-center items-center  space-y-3">
        <h3 className="text-3xl font-bold mb-2">Gadget Heaven</h3>
        <p className="text-gray-500 mb-5">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>
      <div className="border-t-2 mt-5 border-gray-900 border-opacity-10"></div>
      <div className="grid lg:grid-cols-3 mt-5 items-center gap-5 justify-center text-center">
        <div>
          <h4 className="text-lg font-bold mb-4">Services </h4>
          <div className="flex flex-col text-gray-500">
            <Link>Product Support </Link>
            <Link>Order Tracking </Link>
            <Link>Shipping & Delivery</Link>
            <Link>Returns</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Company </h4>
          <div className="flex flex-col  text-gray-500">
            <Link>About Us </Link>
            <Link>Careers</Link>
            <Link>Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-4">Legal </h4>
          <div className="flex flex-col  text-gray-500">
            <Link>Terms of Service </Link>
            <Link>Privacy Policy</Link>
            <Link>Cookie Policy</Link>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-5">
        © 2024 All right reserved by Ab Nahid
      </p>
    </div>
  );
};

export default Footer;
