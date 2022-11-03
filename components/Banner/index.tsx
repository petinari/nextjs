import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

export const Banner = () => {
  return (
    <div className={styles.container}>
      <Swiper
        className={styles.swiper}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner1.png" />
        </SwiperSlide>
        <SwiperSlide className={styles.slide}>
          <img src="/tmp/banner2.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
