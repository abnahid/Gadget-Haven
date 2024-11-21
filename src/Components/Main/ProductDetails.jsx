/* eslint-disable react-hooks/rules-of-hooks */
import { toast } from "react-hot-toast";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useLoaderData } from "react-router-dom";
import { useCart } from "../../CartContext";
import { useTitle } from "./Utils/Utils";

const ProductDetails = () => {
  const product = useLoaderData();
  const { cartItems, addToCart, wishlistItems, addToWishlist } = useCart();

  if (!product) {
    return <p>Product not found.</p>;
  }

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    rating,
    availability,
    product_id,
  } = product;

  useTitle(product_title);

  // Check if the product is already in the cart or wishlist
  const isInCart = cartItems.some((item) => item.product_id === product_id);
  const isInWishlist = wishlistItems.some(
    (item) => item.product_id === product_id
  );

  // Add to Cart with Toast
  const handleAddToCart = () => {
    if (!availability) {
      toast.error("Product is out of stock!");
      return;
    }
    if (!isInCart) {
      addToCart({
        product_id: product_id,
        name: product_title,
        price,
        product_image,
        description,
      });
      toast.success("Added to cart!");
    }
  };

  // Add to Wishlist with Toast
  const handleAddToWishlist = () => {
    addToWishlist({
      product_id: product_id,
      name: product_title,
      price,
      product_image,
      description,
    });
    toast.success("Added to wishlist!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Header Section */}
      <div className="text-center min-h-[50vh] bg-purple-600 text-white py-8 w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold">Product Details</h2>
        <p className="mt-2 w-3/5">
          Discover top gadgets designed to elevate your experience. Find
          innovative, high-performance products tailored to fit your
          lifestyle—your go-to essentials for a seamless digital journey.
        </p>
      </div>

      {/* Product Card Section */}
      <div className="bg-white border border-gray-300 -mt-36 mb-12 p-8 w-full max-w-5xl flex flex-col md:flex-row items-center gap-8  rounded-3xl">
        {/* Product Image */}
        <div
          className="w-full md:w-1/3 bg-white rounded-lg flex items-center justify-center"
          style={{ height: "300px" }}
        >
          <img
            src={product_image}
            alt={product_title}
            className="object-cover rounded-lg max-h-full"
          />
        </div>

        {/* Product Info */}
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-2xl font-semibold">{product_title}</h3>
          <p className="text-xl font-bold text-gray-700 my-2">
            Price: ${price}
          </p>

          {/* Availability */}
          <div className="mb-2">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                availability
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <p className="text-gray-600 mb-4">{description}</p>

          {/* Specifications */}
          <h4 className="font-semibold mb-2">Specification:</h4>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            {specification.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          {/* Rating */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
            <span className="ml-2 text-gray-600">{rating} / 5</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleAddToCart}
              disabled={isInCart}
              className={`px-6 py-2 rounded-full flex items-center gap-4 ${
                isInCart
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              <span>{isInCart ? "Added to Cart" : "Add To Cart"}</span>
              <FiShoppingCart />
            </button>

            <button
              onClick={handleAddToWishlist}
              disabled={isInWishlist}
              className={`rounded-full text-xl ${
                isInWishlist
                  ? "text-gray-400 cursor-not-allowed"
                  : "text-purple-600 hover:text-purple-800"
              }`}
            >
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
