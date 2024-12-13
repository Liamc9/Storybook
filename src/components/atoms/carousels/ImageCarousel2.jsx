import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, A11y } from "swiper/modules";

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  aspect-ratio: 5 / 4;
  margin: 0;

  .swiper-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background: rgba(255, 255, 255, 0.8);
    width: 10px;
    height: 10px;
    opacity: 1;
    margin: 0 5px;
    border-radius: 50%;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }

  .swiper-slide img {
    height: 100%;
    width: auto;
    object-fit: cover;
    display: block;
  }
`;

const ImageCarousel = ({ images }) => {
  return (
    <ImageContainer>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={images.length > 1}
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={index}>
            <img
              src={imgUrl}
              alt={`Image ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </ImageContainer>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
