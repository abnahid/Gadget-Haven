/* eslint-disable react/prop-types */
const Categories = ({ categories, onSelectCategory }) => {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-2xl md:w-3/12 lg:w-3/12 border-2 border-gray-300 px-5 bg-white ">
      {categories.length > 0 ? (
        categories.map((cat, index) => (
          <div
            key={index}
            className="py-3 px-6 bg-gray-200 rounded-full hover:bg-blue-700  cursor-pointer hover:text-white text-lg "
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </div>
        ))
      ) : (
        <li>Loading categories...</li>
      )}
    </div>
  );
};

export default Categories;
