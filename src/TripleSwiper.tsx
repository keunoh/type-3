import React, { useEffect, useState } from "react";
import Swiper from "swiper";
import "swiper/css";
import "./test.css"

const images = [
  "https://picsum.photos/600/300?random=1",
  "https://picsum.photos/600/300?random=2",
  "https://picsum.photos/600/300?random=3",
  "https://picsum.photos/600/300?random=4",
  "https://picsum.photos/600/300?random=5",
];


const TripleSwiperComponent: React.FC = () => {
  const [mainSwiper, setMainSwiper] = useState<Swiper | null>(null);
  const [prevSwiper, setPrevSwiper] = useState<Swiper | null>(null);
  const [nextSwiper, setNextSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    // 슬라이더들을 초기화하는 함수
    const initSliders = () => {
      // mainSwiper 초기화
      const main = new Swiper(".slider-main", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 10,
        on: {
          init: () => {
            // mainSwiper가 초기화된 후에만 동기화
            if (prevSwiper && nextSwiper) {
              console.log("여기에들어");

              main.controller.control = [prevSwiper, nextSwiper];
            }
          },
        },
      });
      setMainSwiper(main);

      // prevSwiper 초기화
      const prev = new Swiper(".slider-prev", {
        loop: true,
        allowTouchMove: false,
        slidesPerView: 1,
      });
      setPrevSwiper(prev);

      // nextSwiper 초기화
      const next = new Swiper(".slider-next", {
        loop: true,
        allowTouchMove: false,
        slidesPerView: 1,
      });
      setNextSwiper(next);
    };

    initSliders();

    // 컴포넌트 언마운트 시 초기화된 Swiper들을 파괴
    return () => {
      mainSwiper?.destroy();
      prevSwiper?.destroy();
      nextSwiper?.destroy();
    };
  }, []); // [] 의존성 배열을 통해 컴포넌트 마운트 시 한 번만 실행

  return (
    <div className="swiper-container-wrapper">
      {/* 이전 슬라이더 */}
      <div className="swiper-container slider-prev">
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div className="swiper-slide" key={`prev-${index}`}>
              <img
                src={images[(images.length + index - 1) % images.length]}
                alt={`Previous Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* 메인 슬라이더 */}
      <div className="swiper-container slider-main">
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div className="swiper-slide" key={`main-${index}`}>
              <img src={src} alt={`Main Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* 다음 슬라이더 */}
      <div className="swiper-container slider-next">
        <div className="swiper-wrapper">
          {images.map((src, index) => (
            <div className="swiper-slide" key={`next-${index}`}>
              <img
                src={images[(index + 1) % images.length]}
                alt={`Next Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripleSwiperComponent;
