import {
  FaSearch,
  FaMicrophone,
} from "react-icons/fa";
import { PiCameraPlusFill } from "react-icons/pi";
import { LiaGemSolid } from "react-icons/lia";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiHeart, CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { useCart } from "../../components/CartContext"; // 👈 import the context

const Header = () => {
  const { cartCount, wishlistCount } = useCart(); // 👈 get counts from context

  return (
    <header className="w-full bg-white shadow-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-serif font-bold text-rose-900">RJ</span>
        </div>

        {/* Search bar (visible on md and up) */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="flex items-center bg-[#f9f9f9] rounded-full border border-gray-200 px-4 py-1.5 w-full max-w-2xl mx-auto">
            <FaSearch className="text-rose-900 text-sm mr-2" />
            <input
              type="text"
              placeholder="Search for Gold Jewellery, Diamond Jewellery and more…"
              className="flex-1 bg-transparent outline-none placeholder:text-gray-400 text-sm text-gray-800"
            />
            <PiCameraPlusFill className="text-rose-900 text-lg mx-2" />
            <FaMicrophone className="text-rose-900 text-sm" />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-5 text-rose-900 text-xl">
          {/* Optional full icon group for md and up */}
          <div className="hidden md:flex items-center space-x-5">
            <LiaGemSolid className="cursor-pointer" />
            <IoStorefrontOutline className="cursor-pointer" />
          </div>

          {/* Wishlist icon with count */}
          <div className="relative">
            <CiHeart className="cursor-pointer" />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-rose-900 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </div>

          {/* User icon */}
          <CiUser className="cursor-pointer" />

          {/* Cart icon with count */}
          <div className="relative">
            <SlHandbag className="cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-3 -right-3 bg-rose-900 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
