import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Categories from "./Categories";
import Gadget from "./Gadget";
import { useTitle } from "./Utils/Utils";
import "/./src/index.css";

const Gadgets = () => {
  useTitle("Home");

  const navigate = useNavigate();
  const data = useLoaderData();
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      const uniqueCategories = [
        "All Category",
        ...new Set(data.map((gadget) => gadget.category)),
      ];
      setCategories(uniqueCategories);
    }
  }, [data]);

  useEffect(() => {
    setLoading(false);
    if (selectedCategory === "All Category") {
      setGadgets(data);
    } else {
      const filteredGadgets = data.filter(
        (gadget) => gadget.category === selectedCategory
      );
      setGadgets(filteredGadgets);
    }
  }, [selectedCategory, data]);

  return (
    <div className="pb-12 my-12">
      <h3 className="text-3xl font-bold text-center pb-5">
        Explore Cutting-Edge Gadgets
      </h3>
      <div className="lg:flex gap-6 px-5 ">
        <Categories
          categories={categories}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />

        {/* Gadgets Grid */}
        <div className="md:w-9/12 lg:w-10/12">
          {loading ? (
            <div className="flex justify-center items-center min-h-[80vh]">
              <span className="loading loading-dots loading-lg"></span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {gadgets.length > 0 ? (
                gadgets.map((gadget) => (
                  <Gadget key={gadget.product_id} gadget={gadget} />
                ))
              ) : (
                <p>No gadgets available.</p>
              )}
            </div>
          )}
          <button
            className="btn mt-8 bg-gradient-to-r from-purple-600 via-purple-600 to-pink-500 text-white animate-gradient"
            onClick={() => navigate("/")}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
