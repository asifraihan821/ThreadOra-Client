// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import bgImage from '../../assets/img/banner/banner-1.jpg'



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const CaroselSlide = () => {
  return (
    <div className="w-full h-[500px] text-center py-50" style={{backgroundImage: `url(${bgImage})`}}>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <h1 className='text-pink-600 text-5xl font-bold mb-5 italic'>The Chloe collection</h1>
            <a className="font-bold px-3 py-2 underline underline-offset-4 text-xl" href="">Shop Now</a>
        </SwiperSlide>
        <SwiperSlide>
            <h1 className='text-pink-600 text-5xl font-bold mb-5 italic'>Hot Sale's</h1>
            <a className="font-bold px-3 py-2 underline underline-offset-4 text-xl" href="">Shop Now</a>
        </SwiperSlide>
        <SwiperSlide>
            <h1 className='text-pink-600 text-5xl font-bold mb-5 italic'>Latest Designed Products</h1>
            <a className="font-bold px-3 py-2 underline underline-offset-4 text-xl" href="">Shop Now</a>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
}


export default CaroselSlide;