import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles.css';
import { Pagination } from 'swiper/modules';
import StarRating from '../composants/StarRating'


const Movie = () => {
return (
    <div className='flex flex-col items-center text-center mt-36'>
    
    <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        centeredSlides={true}
        initialSlide={1}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src='https://image.noelshack.com/fichiers/2024/38/5/1726833341-test.jpg' alt=''></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.noelshack.com/fichiers/2024/38/5/1726833341-test.jpg' alt=''></img>
        </SwiperSlide>
        <SwiperSlide>
        <img src='https://image.noelshack.com/fichiers/2024/38/5/1726833341-test.jpg' alt=''></img>
        </SwiperSlide>
      </Swiper>

    <h1 className='text-white mt-9'>Jujutsu Kaisen 0</h1>
    <span className='text-spantextcolor mt-3 text-lg'>Park Seong-hu</span>
    <StarRating />

   <button className='flex items-center justify-between text-white mt-10 font-bold bg-backgroundticket p-3 px-12 rounded-xl gap-2'>
   <img src="../../public/uploads/icon-ticket.svg" alt="Icon" width="25" height="25" />
   ACHETER
   </button> 
    </div>
);

};

export default Movie;