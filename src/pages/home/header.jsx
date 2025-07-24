import { FaSearch, FaGem, FaStore, FaHeart, FaUser, FaShoppingBag, FaMicrophone } from "react-icons/fa";
import { PiCameraPlusFill } from "react-icons/pi";
import { LiaGemSolid } from "react-icons/lia";
import { IoStorefrontOutline } from "react-icons/io5";
import { CiHeart, CiUser } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";



const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-serif font-bold text-rose-900">RJ</span>
        </div>

        {/* Search bar */}
        <div className="flex-1 mx-6">
          <div className="flex items-center bg-[#f9f9f9] rounded-full border border-gray-200 px-4 py-1.5 max-w-2xl mx-auto">
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
          <LiaGemSolid className="cursor-pointer" />
          <IoStorefrontOutline className="cursor-pointer" />
          <CiHeart className="cursor-pointer" />
          <CiUser className="cursor-pointer" />
          <div className="relative">
            <SlHandbag className="cursor-pointer" />
            <span className="absolute -top-3 -right-3 bg-rose-900 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
