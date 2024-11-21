import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import modalImage from "../assets/Group.png";
import { useCart } from "../CartContext";
import "../index.css";
import { useTitle } from "./Main/Utils/Utils";

const Dashboard = () => {
  useTitle("Dashboard");
  const { cartItems, removeFromCart, wishlistItems, removeFromWishlist } =
    useCart();
  const [activeTab, setActiveTab] = useState("cart");
  const [sortedItems, setSortedItems] = useState([...cartItems]);
  const [isSorted, setIsSorted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setSortedItems([...cartItems]);
  }, [cartItems]);

  // Sorting function for cart items by price
  const handleSort = () => {
    if (isSorted) {
      setSortedItems([...cartItems]);
      setIsSorted(false);
    } else {
      const sorted = [...cartItems].sort((a, b) => a.price - b.price);
      setSortedItems(sorted);
      setIsSorted(true);
    }
  };

  const totalCost = cartItems
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  const handlePurchase = () => {
    setIsModalOpen(true);
  };

  const closeModalAndNavigate = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div>
      <div className="bg-purple-600 text-center p-8 text-white flex flex-col items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-2 w-3/5">
          Step into your personalized hub for exploring the newest gadgets and
          innovations. From top tech trends to must-have accessories, find
          everything you need to enhance your digital experience, all in one
          place!
        </p>

        <div className="flex justify-center mt-4 space-x-4 text-lg font-extrabold">
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-14 py-3 rounded-full ${
              activeTab === "cart"
                ? "bg-white text-purple-600 shadow-inner"
                : "border border-white text-white"
            }`}
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-14 py-3 rounded-full ${
              activeTab === "wishlist"
                ? "bg-white text-purple-600 shadow-inner"
                : "border border-white text-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      <div className="bg-white text-black rounded-lg p-8">
        {activeTab === "cart" ? (
          <>
            <div className="flex justify-between items-center mt-4 px-4 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cart</h2>

              <div className="flex items-center space-x-4">
                <p className="text-lg font-bold">Total cost: ${totalCost}</p>
                <button
                  onClick={handleSort}
                  className="btn btn-outline btn-secondary"
                >
                  {isSorted ? "Reset Order" : "Sort by Price"}
                </button>
                <button
                  onClick={handlePurchase}
                  disabled={cartItems.length === 0} // Disable button if cart is empty
                  className="btn bg-gradient-to-r from-purple-600 via-purple-600 to-pink-500 text-white animate-gradient"
                >
                  Purchase
                </button>
              </div>
            </div>
            {sortedItems.length > 0 ? (
              sortedItems.map((item) => (
                <div
                  key={item.product_id}
                  className="flex items-center justify-between p-4 mb-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-1/6 h-full bg-gray-300 rounded-xl mr-8">
                      <img
                        src={item.product_image}
                        alt={item.name}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      <p className="text-lg text-gray-600">
                        {item.description}
                      </p>
                      <p className="text-xl font-semibold text-gray-500">
                        Price: ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.product_id)}
                    className="text-red-500 font-bold text-6xl"
                  >
                    <IoIosCloseCircleOutline />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">
                Your cart is empty.
              </p>
            )}
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-4">Wishlist</h2>
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item) => (
                <div
                  key={item.product_id}
                  className="flex items-center justify-between p-4 mb-4 border rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-1/6 h-full bg-gray-300 rounded-xl mr-8">
                      <img
                        src={item.product_image}
                        alt={item.name}
                        className="object-cover w-full h-full rounded-md"
                      />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{item.name}</h3>
                      <p className="text-lg text-gray-600">
                        {item.description}
                      </p>
                      <p className="text-xl font-semibold text-gray-500">
                        Price: ${item.price.toFixed(2)}
                      </p>
                      <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 mt-4 flex items-center gap-4">
                        <span>Add To Cart</span>
                        <FiShoppingCart />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromWishlist(item.product_id)}
                    className="text-red-500 font-bold text-6xl"
                  >
                    <IoIosCloseCircleOutline />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-4">
                Your wishlist is empty.
              </p>
            )}
          </>
        )}
      </div>

      {/* DaisyUI Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box flex flex-col items-center justify-center">
            <div className="mb-4">
              <img src={modalImage} alt="" />
            </div>
            <h3 className="text-2xl font-bold">Payment Successfully</h3>
            <p className="py-4 font-medium">Thanks for purchasing.</p>
            <p className="text-gray-500 font-semibold">Total: ${totalCost}</p>
            <div className="modal-action w-full">
              <button
                onClick={() => {
                  closeModalAndNavigate();
                }}
                className="btn font-semibold rounded-full w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
