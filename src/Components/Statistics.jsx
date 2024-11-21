/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTitle } from "./Main/Utils/Utils";

const Statistics = () => {
  useTitle("Statistics");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/product.JSON")
      .then((response) => response.json())
      .then((Data) => setData(Data));
  }, []);

  return (
    <div>
      <div className="bg-purple-600 text-center p-8 text-white flex flex-col items-center">
        <h2 className="text-3xl font-bold">Statistics</h2>
        <p className="mt-4 w-3/5">
          Discover cutting-edge gadgets designed to elevate your lifestyle.
          Whether you're into smart technology or sleek accessories, our
          collection brings the latest innovations right to your fingertips!
        </p>
      </div>

      {/* Chart Section */}
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-8 mt-8">
        <h3 className="text-2xl font-semibold mb-6">Statistics</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#8e44ad" name="Price" />
            <Bar dataKey="stock_count" fill="#7f8c8d" name="Total" />
            <Bar dataKey="rating" fill="#e74c3c" name="Rating" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
