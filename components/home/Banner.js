import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";


// import required modules
import { Autoplay, EffectFade, Navigation } from "swiper";
const Banner = () => {
    return (
        <div className={styles.banner_slider}>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, EffectFade, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Link href='#'><Image className={styles.ads_banner} src='/images/vehicles.jpg' width={1200} height={340} alt='dobuyme' /></Link></SwiperSlide>
                <SwiperSlide><Link href='#'><Image className={styles.ads_banner} src='/images/classified.jpg' width={1200} height={340} alt='dobuyme' /></Link></SwiperSlide>
                <SwiperSlide><Link href='#'><Image className={styles.ads_banner} src='/images/sell-phone.jpg' width={1200} height={340} alt='dobuyme' /></Link></SwiperSlide>
                <SwiperSlide><Link href='#'><Image className={styles.ads_banner} src='/images/property.jpg' width={1200} height={340} alt='dobuyme' /></Link></SwiperSlide>
                <SwiperSlide><Link href='#'><Image className={styles.ads_banner} src='/images/household.jpg' width={1200} height={340} alt='dobuyme' /></Link></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Banner