import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import css from "./style.module.css";

// import required modules
import { EffectCards } from "swiper/modules";
import { sliderData } from "./utils";

export default function Rightslider() {
  return (
    <>
      <div className={css.inner}>
        <div className={css.wrapperslider}>
          <Swiper
            effect={"cards"}
            loop={true}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {sliderData.map((item) => (
              <SwiperSlide key={item.id}>
                <img
                  className={css.sliderimage}
                  src={item.imageUrl}
                  alt="slide"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
