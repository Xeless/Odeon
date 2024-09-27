// MovieCarousel.js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const MovieCarousel = ({ title, movies }) => {
  return (
    <div className="mt-5 p-20">
      <h3 className="text-white text-3xl font-bold mb-5 relative underline">{title}</h3>
      
      <Swiper
        modules={[Pagination]}

        breakpoints={{
          // pour les mobiles
          320: {
            slidesPerView: 1, // 1 élément sur très petits écrans (ex: 320px)
            spaceBetween: 30,
          },
          // pour les écrans de taille moyenne
          640: {
            slidesPerView: 2, // 2 éléments pour un écran de 640px
            spaceBetween: 15,
          },
          // pour les écrans un peu plus grands
          768: {
            slidesPerView: 2, // 3 éléments pour un écran de 768px
            spaceBetween: 10,
          },
          // pour les écrans de tablettes/grandes tailles
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,

          },
          1500: {
            slidesPerView: 7,

          },
        }}
        className="mySwiper"
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center">
            <div className="h-96 w-72 overflow-hidden mt-5">
              <img
                src={movie.image}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
            </div>
            <h1 className="text-white text-xl mt-2">{movie.title}</h1>
            <span className="text-spantextcolor text-xl mt-2">{movie.author}</span>
            <button className="flex items-center justify-between text-white mt-4 font-bold bg-backgroundticket p-3 px-10 rounded-xl gap-2">
              <img src="../../public/uploads/icon-ticket.svg" alt="Icon" width="25" height="25" />
              ACHETER
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieCarousel;