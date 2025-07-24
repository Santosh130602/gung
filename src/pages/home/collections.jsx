const Collection = () => {
  return (
    <section className="px-4 py-10 bg-white text-center">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-2">
        RJ Gems Collections
      </h2>
      <p className="text-gray-600 text-md sm:text-lg mb-8">
        Explore our newly launched collection
      </p>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {/* Left: Tall Image */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3fd145e1/homepage/tanishq-collections/sparkling-desktop.jpg"
            alt="Sparkling Avenues"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right: Two stacked images */}
        <div className="flex flex-col gap-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwfba22b76/homepage/tanishq-collections/stunning-every-ear.jpg"
              alt="Earrings"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw1eded5b5/homepage/tanishq-collections/dailywear-chains.jpg"
              alt="Daily Chains"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
