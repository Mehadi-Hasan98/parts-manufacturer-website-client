import React from 'react';

const Banner = () => {
    return (
        <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full">
    <img style={{height: "700px"}} src="https://i.ibb.co/BCqNgSB/Banner2.jpg" class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img style={{height: "700px"}} src="https://i.ibb.co/hm2wXMd/banner1.jpg" class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img style={{height: "700px"}} src="https://i.ibb.co/dBbKvP5/Banner3.jpg" class="w-full" alt=''/>
    <div><h1 class="fixed">New Parts, New Machine</h1></div>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img style={{height: "700px"}} src="https://i.ibb.co/GcWr80q/Banner4.jpg" class="w-full" alt=''/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;