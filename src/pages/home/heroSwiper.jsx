import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSwiper = () => {
  const images = [
    "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw770a9bca/homepage/tanishq-pillars/tw-nt-wedding-desktop.jpg",
    "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dwd3bc63a7/homepage/tanishq-pillars/tw-diamond-desktop.jpg",
    "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw60988e8b/homepage/tanishq-pillars/tw-nt-gold-desktop.jpg",
    "https://www.tanishq.co.in/on/demandware.static/-/Library-Sites-TanishqSharedLibrary/default/dw3e1d9079/homepage/tanishq-pillars/tw-dailywear-desktop.jpg",
  ];

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="${className} custom-bullet"></span>`,
        }}
        loop
        className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Bullet Styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          background-color: #cbd5e1; /* Tailwind's gray-400 */
          opacity: 1;
          border-radius: 9999px;
        }
        .swiper-pagination-bullet-active {
          background-color: #dc2626 !important; /* Tailwind's red-600 */
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
};

export default HeroSwiper;
