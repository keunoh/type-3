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
        loop: true,
        slidesPerView: "auto",
        spaceBetween: 20,
      });
    } else {
      // 데스크탑 환경: Swiper 제거
      if (swiperRef.current) {
        swiperRef.current.destroy();
        swiperRef.current = null;
      }
    }

    return () => {
      // 컴포넌트 언마운트 시 Swiper 인스턴스 정리
      swiperRef.current?.destroy();
    }
  }, [isMobile]);

  /**
   * Swiper를 수동으로 생성해줘야 할지도 모름
   */
  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <dl className="swiper-slide">
            <td>Slide DL1</td>
            <dd>DDD</dd>
          </dl>
          <dl className="swiper-slide">
            <td>Slide DL2</td>
            <dd>DDD</dd>
          </dl>
          <dl className="swiper-slide">
            <td>Slide DL3</td>
            <dd>DDD</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSwiper;
