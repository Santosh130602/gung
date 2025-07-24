const trendingItems = [
  {
    title: "Auspicious Occasion",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw53dce9ad/homepage/trendingNow/rath-yathra.jpg",
  },
  {
    title: "Gifting Jewellery",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd7004c0d/homepage/trendingNow/gifting.jpg",
  },
  {
    title: "18Kt Jewellery",
    img: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw28989eec/homepage/trendingNow/18kt-jewellery.jpg",
  },
];

const TrendingNow = () => {
  return (
    <section className="bg-white px-4 py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-2">
        Trending Now
      </h2>
      <p className="text-gray-600 text-lg mb-16">
        Jewellery pieces everyone’s eyeing right now
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {trendingItems.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-md">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="mt-3 font-medium text-base md:text-lg text-gray-800">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;
