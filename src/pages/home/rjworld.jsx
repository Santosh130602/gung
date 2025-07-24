const RJWorldData = [
  {
    title: "Wedding",
    img: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg",
  },
  {
    title: "Diamond",
    img: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd3bc63a7/homepage/tanishq-pillars/tw-diamond-desktop.jpg",
  },
  {
    title: "Gold",
    img: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg",
  },
  {
    title: "Dailywear",
    img: "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3e1d9079/homepage/tanishq-pillars/tw-dailywear-desktop.jpg",
  },
];

const RJWorld = () => {
  return (
    <section className="px-4 py-12 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-2">
        RJ Gems World
      </h2>
      <p className="text-gray-600 text-lg mb-16">
        A companion for every occasion
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {RJWorldData.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden shadow-md group transition-transform duration-300 ${
              index % 2 === 0 ? "-translate-y-2" : "translate-y-2"
            }`}
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-red-800/30 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-md">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RJWorld;
