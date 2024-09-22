import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
import { Pagination, Autoplay } from "swiper/modules"; // Autoplay


const Movie = () => {
  return (
    <div className="flex-col min-h-screen text-start flex">
      <div
        className="relative w-full h-[70vh] bg-cover bg-center" 
        style={{
          backgroundImage: `url(https://media.pathe.be/home/featuring/backdrop/149843/lg/1/joker-folie-a-deux-1920x850.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative flex flex-col justify-center items-start h-full w-full px-5 md:px-96">
        <img alt="" loading="lazy" src="https://media.pathe.be/home/featuring/logo/149847/lg/1/joker-folie-a-deux-tt-ok.png" className="w-96"></img>
          
          <button className="text-white font-bold bg-backgroundticket p-3 px-8 rounded-xl mt-5  flex justify-between gap-3">
          <img src="../../public/uploads/icon-ticket.svg" alt="Icon" width="25" height="25"/>
            Reservez maintenant
          </button>
        </div>
      </div>

      {/* Conteneur pour les films à l'affiche */}
      <div className="mt-10 ">
        <h3 className="text-white text-3xl font-bold mb-5">
          À l'affiche au cinéma
        </h3>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          initialSlide={1}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
          
          </SwiperSlide>
          <SwiperSlide>
        
          </SwiperSlide>
          <SwiperSlide>
         
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Conteneur pour les films populaires */}
      <div className="mt-20">
        <h3 className="text-white text-3xl font-bold mb-10">
          Films populaires
        </h3>
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          initialSlide={1}
          className="mySwiper"
        >
          <SwiperSlide>
         
          </SwiperSlide>
          <SwiperSlide>
         
          </SwiperSlide>
          <SwiperSlide>
         
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Movie;
