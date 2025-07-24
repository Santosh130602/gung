
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../../components/CartContext"; // ✅ Hook from context

const categories = [
  {
    name: "EARRINGS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw83758477/homepage/shopByCategory/earrings-cat.jpg",
    description: "Elegant earrings to complement every outfit.",
    about: "Explore a wide variety of finely crafted earrings, perfect for festive, casual, or formal occasions.",
    quality: "Made from 22K gold with precision-cut stones for unmatched shine.",
    price: "$153"
  },
  {
    name: "FINGER RINGS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw47da8133/homepage/shopByCategory/rings-cat.jpg",
    description: "Stylish rings for every occasion.",
    about: "Our finger rings are thoughtfully designed to match both tradition and trend, for him and her.",
    quality: "Crafted with premium gold and diamond accents for lasting brilliance.",
    price: "$133"
  },
  {
    name: "PENDANTS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw63553376/homepage/shopByCategory/pendants-cat.jpg",
    description: "Beautiful pendants crafted in silver and gold.",
    about: "Discover pendants that bring elegance to every neckline, from dainty designs to bold statements.",
    quality: "Hand-polished with anti-tarnish finish and pure gold craftsmanship.",
    price: "$123"
  },
  {
    name: "MANGALSUTRA",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw442a2739/homepage/shopByCategory/mangalsutra-cat.jpg",
    description: "Traditional and modern Mangalsutra designs for every bride.",
    about: "Symbolizing eternal love, our Mangalsutras combine traditional motifs with modern flair.",
    quality: "Made with certified black beads, 22K gold, and intricate detailing.",
    price: "$143"
  },
  {
    name: "BRACELETS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw2562a9fe/homepage/shopByCategory/bracelets-cat.jpg",
    description: "Trendy and timeless bracelets for daily and festive wear.",
    about: "Sleek to statement — our bracelets are designed to stack, shine, and stand out.",
    quality: "Durable clasp and handcrafted links with high-polish finish.",
    price: "$173"
  },
  {
    name: "BANGLES",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1226b98b/homepage/shopByCategory/bangles-cat.jpg",
    description: "Classic bangles with intricate craftsmanship.",
    about: "Traditional designs meet flawless craftsmanship in our exclusive bangle collection.",
    quality: "Precision-cast in 22K gold with intricate hand-engraving.",
    price: "$223"
  },
  {
    name: "CHAINS",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd0550e4c/homepage/shopByCategory/chains-cat.jpg",
    description: "Elegant chains in gold and silver to match every pendant.",
    about: "Whether worn solo or layered, our chains are perfect for adding a golden touch.",
    quality: "Made from solid 18K/22K gold, anti-kink and skin-friendly finish.",
    price: "$323"
  },
  {
    name: "NOSE PINS",
    img: "https://mohanjewellery.com/wp-content/uploads/2021/01/DOCNP267_1565685940.jpg",
    description: "Charming nose pins crafted for tradition and style.",
    about: "Add a touch of tradition to your look with beautifully detailed nose pins.",
    quality: "Crafted from hypoallergenic metal with secure screw-back locking.",
    price: "$113"
  },
  {
    name: "NECKLACES",
    img: "https://clara.in/cdn/shop/files/CSNSN9_1_1024x1024.jpg?v=1744796006",
    description: "Stunning necklaces to complete your perfect look.",
    about: "Necklaces that captivate — ideal for weddings, parties, or heirloom gifting.",
    quality: "Featuring hand-set stones and luxurious gold plating for long-lasting wear.",
    price: "$623"
  },
  {
    name: "KADAS",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlKAjmc08NEWkWdEtRhAJioFydjTswfvUV0A&s",
    description: "Bold and beautiful kadas designed for men and women.",
    about: "Our kadas are bold, spiritual, and stylish — crafted for everyday wear or special moments.",
    quality: "Solid metal structure with engraved designs and adjustable fit.",
    price: "$423"
  }
];

const CategoryDetail = () => {
  const { name } = useParams();
  const category = categories.find(cat => cat.name === name);
  const { addToCart, addToWishlist } = useCart(); // ✅ from context

  if (!category) return <p className="text-center mt-10">Category not found.</p>;

  return (
    <section className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-serif font-bold text-center text-rose-700 mb-12">
        {category.name}
      </h1>

      <div className="flex flex-col sm:flex-row gap-10 items-start">
        {/* Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={category.img}
            alt={category.name}
            className="w-[220px] sm:w-full rounded-xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 px-12 sm:px-4 space-y-6">
          <p className="text-lg text-green-700 font-semibold">{category.quality}</p>
          <p className="text-gray-800 text-base leading-relaxed">{category.about}</p>
          <p className="text-gray-500 italic">{category.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => {
                addToCart();
                toast.success(`${category.name} added to cart!`);
              }}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-full transition"
            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToWishlist();
                toast.success(`${category.name} added to wishlist 💖`);
              }}
              className="px-6 py-3 border border-rose-600 text-rose-600 hover:bg-rose-50 rounded-full transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDetail;
