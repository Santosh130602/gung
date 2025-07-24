
import { useState } from "react";

import { useNavigate } from "react-router-dom";



const categories = [
  {
    name: "EARRINGS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw83758477/homepage/shopByCategory/earrings-cat.jpg",
    description: "Elegant earrings to complement every outfit."
  },
  {
    name: "FINGER RINGS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47da8133/homepage/shopByCategory/rings-cat.jpg",
    description: "Stylish rings for every occasion."
  },
  {
    name: "PENDANTS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw63553376/homepage/shopByCategory/pendants-cat.jpg",
    description: "Beautiful pendants crafted in silver and gold."
  },
  {
    name: "MANGALSUTRA",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw442a2739/homepage/shopByCategory/mangalsutra-cat.jpg",
    description: "Traditional and modern Mangalsutra designs for every bride."
  },
  {
    name: "BRACELETS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2562a9fe/homepage/shopByCategory/bracelets-cat.jpg",
    description: "Trendy and timeless bracelets for daily and festive wear."
  },
  {
    name: "BANGLES",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1226b98b/homepage/shopByCategory/bangles-cat.jpg",
    description: "Classic bangles with intricate craftsmanship."
  },
  {
    name: "CHAINS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd0550e4c/homepage/shopByCategory/chains-cat.jpg",
    description: "Elegant chains in gold and silver to match every pendant."
  },
  {
    name: "NOSE PINS",
    img: "https://mohanjewellery.com/wp-content/uploads/2021/01/DOCNP267_1565685940.jpg",
    description: "Charming nose pins crafted for tradition and style."
  },
  {
    name: "NECKLACES",
    img: "https://clara.in/cdn/shop/files/CSNSN9_1_1024x1024.jpg?v=1744796006",
    description: "Stunning necklaces to complete your perfect look."
  },
  {
    name: "KADAS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKAjmc08NEWkWdEtRhAJioFydjTswfvUV0A&s",
    description: "Bold and beautiful kadas designed for men and women."
  }
];

const CategoryGrid = () => {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();
  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <section className="px-4 py-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-2">
        Find Your Perfect Match
      </h2>
      <p className="text-gray-600 text-lg mb-16">Shop by Categories</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {visibleCategories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/category/${cat.name}`)}
          >
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-semibold text-sm md:text-base text-gray-800">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-2 text-white bg-red-600 hover:bg-red-700 rounded-full transition font-medium text-sm md:text-base cursor-pointer"
          >
            Explore All
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoryGrid;
