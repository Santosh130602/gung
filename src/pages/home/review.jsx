import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import '../../assets/styles/reviewHome.css'; // Import the custom CSS

const testimonials = [
  {
    text: "Another great testimonial about how impactful the service is.",
    name: "Mr. John Doe",
    role: "Human Resource",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClOe2JF9VFcwpCNWAmMQcuWJrmEOkrZ6URw&s",
  },
  {
    text: "Another great testimonial about how impactful the service is.",
    name: "Ms. Jane Smith",
    role: "Operations Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClOe2JF9VFcwpCNWAmMQcuWJrmEOkrZ6URw&s",
  },
  {
    text: "Exceptional support and a team that truly understands our goals.",
    name: "Mr. Alex Johnson",
    role: "Product Lead",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClOe2JF9VFcwpCNWAmMQcuWJrmEOkrZ6URw&s",
  },
   {
    text: "Exceptional support and a team that truly understands our goals.",
    name: "Mr. Alex Johnson",
    role: "Product Lead",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClOe2JF9VFcwpCNWAmMQcuWJrmEOkrZ6URw&s",
  },
   {
    text: "Exceptional support and a team that truly understands our goals.",
    name: "Mr. Alex Johnson",
    role: "Product Lead",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClOe2JF9VFcwpCNWAmMQcuWJrmEOkrZ6URw&s",
  },
  // Add more as needed...
];

const TestimonialSlider = () => {
  return (
    <div className="px-4 py-20 lg:px-20 bg-white">
       <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-2">
        RJ Gems Experience
      </h2>
      <p className="text-gray-600 text-lg mb-12">
       Find a Boutique or Book a Consultation
      </p>

      <div className="py-8">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="relative overflow-hidden rounded-[2rem] card-hover-bg group p-12 h-full mt-2 bg-gray-100 text-black transition-all duration-500 hover:text-white hover:-translate-y-2 cursor-pointer">
                <div className="relative z-10">
                  <div className="flex gap-1 mb-4 text-yellow-400">
                    {Array(5)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>

                  <p className="italic text-base mb-6 transition-colors duration-300">
                    {t.text}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{t.name}</h4>
                      <p className="uppercase text-green-600 group-hover:text-white tracking-widest text-xs">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;

