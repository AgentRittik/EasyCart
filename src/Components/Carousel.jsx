import React from 'react'

function Carousel() {
  return (
    <>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_banner_.most_loved_oversized_full_sleeves.jpg?format=webp&w=1500&dpr=1.3" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage_Men-Oversized-Sweatshirts.jpg?format=webp&w=1500&dpr=1.3" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner.png?format=webp&w=1500&dpr=1.3" class="d-block w-100" alt="..."/>
          </div>
        </div>
    </div>
    <div class="custom-divider "></div> 
    </>
  )
}

export default Carousel;