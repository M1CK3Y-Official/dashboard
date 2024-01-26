'use client'
import { register } from 'swiper/element/bundle';
import styles from './devSwiper.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";

import Image from 'next/image';
import { useEffect } from 'react';

const DevSwiper = ({author}) => {

    useEffect(() => {
        console.log('swiper registered')
        register();
    }, []);

  

    return (
        <div className={styles.slider}>
            <swiper-container  pagination="true"  autoplay-delay="5000" rewind="true" effect="coverflow" navigation="true" loop="true" slides-per-view="1" keyboard="true">
                {author.map( (image) => {
                    return <swiper-slide key={image._id} className={styles.slide}>
                        <Image className={styles.image} src={`/galleries${image.path}`} alt={image.name} width={image.width} height={image.height} />
                    </swiper-slide>
                
                })}
            </swiper-container>

        </div>
    )

}

export default DevSwiper;