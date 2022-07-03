import React from 'react';
import {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {DATA} from "../config/data";
import Image from "../components/image";
import {Box, Container} from "theme-ui";
import BlockTitle from "../components/block-title";

const Clients = () => {
    return (
        <Box sx={styles.features} id="news">
            <Container>
                <BlockTitle
                    slogan="Trusted Clients"
                    title="Tutorials that people love most"
                    styles={styles.blockTitle}
                />

                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={6}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        waitForTransition: false,
                        stopOnLastSlide: false
                    }}
                    speed={3000}
                    breakpoints={{
                        320: {slidesPerView: 2},
                        768: {slidesPerView: 4},
                        1025: {slidesPerView: 6},
                    }}
                    className="swiper-wrapper"
                >
                    {DATA.clients.map((img) => (
                        <SwiperSlide key={img}>
                            <Image src={img} width={128} height={128}/>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Container>
        </Box>
    );
}

export default Clients;

const styles = {
    blockTitle: {
        textAlign: 'center',
    },
    features: {
        pt: ['80px', null, null, null, null, null, '120px'],
        pb: ['80px', null, null, null, '170px'],
        backgroundColor: '#FFFFFF',
        '.swiper-slider': {
            overflowY: 'visible',
            overflowX: 'hidden',
        },
    },

};
