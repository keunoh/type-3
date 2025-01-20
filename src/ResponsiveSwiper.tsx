import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import useMediaType from "./useMediaType"; // useMediaType 가져오기

const ResponsiveSwiper: React.FC = () => {
  const isMobile = useMediaType("(max-width: 768px)"); // 모바일 여부 감지
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (isMobile) {
      // 모바일 환경: Swiper 초기화
      swiperRef.current = new Swiper(".swiper-container", {
        navigation: true,
        pagination: { clickable: true },
      });
    } else {
      // 데스크탑 환경: Swiper 제거
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    }
  }, [isMobile]);

  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSwiper;
