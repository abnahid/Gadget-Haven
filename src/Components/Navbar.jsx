import { useState } from "react";
import { FaBars, FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../CartContext";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">dashboard</NavLink>
      </li>
    </>
  );
  const { cartItems, wishlistItems } = useCart();
  const [openMenu, setOpenMenu] = useState(false);
  const isHome = location.pathname === "/";

  const nabBarBackground = isHome
    ? "rounded-t-lg bg-purple-700 text-white"
    : "rounded-full bg-white text-black";

  return (
    <div className={`navbar container mx-auto px-12 py-4 ${nabBarBackground}`}>
      <div className="navbar-start">
        <div className="origin-top scale-95">
          <div
            className="btn btn-ghost lg:hidden"
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <RxCross2 /> : <FaBars />}
          </div>
          <ul
            className={`menu menu-sm absolute bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow  ${
              openMenu ? "" : "hidden"
            }`}
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to="/dashboard" className="relative btn rounded-full text-xl">
          <FiShoppingCart />
          <span className="badge absolute -top-2 right-0 badge-secondary ml-2">
            {cartItems.length}
          </span>
        </Link>
        <Link to="/dashboard" className="relative btn rounded-full text-xl">
          <FaRegHeart />
          <span className=" absolute -top-2 right-0 badge badge-secondary ml-2">
            {wishlistItems.length}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
