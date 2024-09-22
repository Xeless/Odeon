import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import "../styles.css";
import { SwiperSlide } from "swiper/react";
import StarRating from "./StarRating";



const MovieSlide = ({ imageUrl, title, director }) => {
    return (
      <SwiperSlide className="flex-col flex">
        <img src={imageUrl} alt={title}></img>
        <div className="flex-col flex items-center text-center">
          <h1 className="text-white mt-9">{title}</h1>
          <span className="text-spantextcolor mt-3 text-lg">{director}</span>
          <StarRating />
          <button className="flex items-center justify-between text-white mt-10 font-bold bg-backgroundticket p-3 px-10 rounded-xl gap-2">
            <img src="../../public/uploads/icon-ticket.svg" alt="Icon" width="25" height="25" />
            ACHETER
          </button>
        </div>
      </SwiperSlide>
    );
  };

  export default MovieSlide