// import React from 'react';

// const Banner = () => {
//     return (
//         <div className="carousel w-full">
//   <div id="slide1" className="carousel-item relative w-full">
//   {/* <h1 className='text-3xl text-center font-mono'>Welcome to Parts Manufacturer Shop</h1> */}
//     <img style={{height: "700px"}} src="https://i.ibb.co/BCqNgSB/Banner2.jpg" className="w-full" alt=''/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">❮</a> 
//       <a href="#slide2" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide2" className="carousel-item relative w-full">
//     <img style={{height: "700px"}} src="https://i.ibb.co/hm2wXMd/banner1.jpg" className="w-full" alt=''/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">❮</a> 
//       <a href="#slide3" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide3" className="carousel-item relative w-full">
//     <img style={{height: "700px"}} src="https://i.ibb.co/fG0ZBt7/img12.webp" className="w-full" alt=''/>
//     <div><h1 className="fixed">New Parts, New Machine</h1></div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">❮</a> 
//       <a href="#slide4" className="btn btn-circle">❯</a>
//     </div>
//   </div> 
//   <div id="slide4" className="carousel-item relative w-full">
//     <img style={{height: "700px"}} src="https://i.ibb.co/GcWr80q/Banner4.jpg" className="w-full" alt=''/>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">❮</a> 
//       <a href="#slide1" className="btn btn-circle">❯</a>
//     </div>
//   </div>
// </div>
//     );
// };

// export default Banner;










import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
// import "./Style.css";
// import NavBar from "../shared/NavBar/NavBar";
const Banner = () => {
  const banner = [
    {
      id: 1,
      img: "https://i.ibb.co/BCqNgSB/Banner2.jpg",
      title: "Parts Manufacturer Website",
      dis: "Car Parts",
    },
    {
      id: 2,
      img: "https://i.ibb.co/hm2wXMd/banner1.jpg",
      title: "Parts Manufacturer Website",
      dis: "Car Parts",
    },
    {
      id: 3,
      img: "https://i.ibb.co/GcWr80q/Banner4.jpg",
      title: "Parts Manufacturer Website",
      dis: "Car Parts",
    },
  ];
  return (
    <div>
      {/* <NavBar /> */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <>
          {banner.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="banner-img relative ">
                {/* <div className="title">
                  <h1 className="font-mono font-bold text-3xl mt-8 mb-8">{item.title}</h1>
                  <div className="borderLine"> </div>
                </div> */}
                <img className="h-screen w-full" src={item.img} alt="" />
                <div className="banner"> </div>
                <div className="dis">
                  <h1 className="font-mono text-white text-center font-bold text-4xl">{item.dis}</h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
};

export default Banner;