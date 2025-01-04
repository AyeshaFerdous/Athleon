import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';


const imageUrls = [
   { url: 'https://i.ibb.co.com/W2fWsgz/banner-1.jpg', title: 'The more difficult the victory, the greater the happiness in winning.'},
   { url: 'https://i.ibb.co.com/1rrMNCk/banner-2.jpg', title: 'Cricket is a battle of mind and body '},
   { url: 'https://i.ibb.co.com/5RZbcFk/banner-3.jpg', title: 'Volleyball anchored me at a time in my life when I needed it....'},
   { url: 'https://i.ibb.co.com/k5hNCwC/banner-4.jpg', title: 'Badminton court is my territory and thats where I will do most of my talking. ...'},
   {url:  'https://i.ibb.co.com/1rPYD5L/banner-5.jpg', title: 'Chess is the struggle against the error'},
]

const Banner = () => (
  <div className="h-full">
    
    <div className="h-full relative dark:bg-black font-sans text-black m-0 p-0">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 120,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="swiper w-full pt-12 pb-12"
      >
         {imageUrls.map((item, i) => (
        <SwiperSlide key={i} className="w-72 h-72 bg-center bg-cover">
          <img
            className="w-full h-full object-cover"
            src={item.url}
            alt={`Image ${i + 1}`}
          />
           <div className="absolute top-[1rem] left-0 w-full  text-white p-4">
            <h3 className="text-2xl font-bold">{item.title}</h3>
           
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);

export default Banner;