import React, {useEffect, useRef} from 'react';
import {Box, Container} from 'theme-ui';
import BlockTitle from 'components/block-title';
import Swiper from 'react-id-swiper';
import PostCard from 'components/post-card';
import {FaLongArrowAltLeft, FaLongArrowAltRight} from 'react-icons/fa';

const Blog = ({posts}) => {
    const ref = useRef(null);
    const goNext = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null && ref.current.swiper !== null) {
            ref.current.swiper.slidePrev();
        }
    };
    const params = {
        slidesPerView: 3,
        slidesPerGroup: posts.length,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
            },
            376: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
            },
            576: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: posts.length,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                slidesPerGroup: posts.length,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: posts.length,
                spaceBetween: 30,
            },
        },
    };
    return (
        <Box sx={styles.features} id="blog">
            <Container>
                <BlockTitle
                    slogan="Blog"
                    title="Articles to gain knowledge"
                    styles={styles.blockTitle}
                />

                <Swiper {...params} ref={ref}>
                    {posts.map((post, index) => (
                        <div className="swiper-slider" key={`feature-card-key${index}`}>
                            <PostCard
                                image={post.thumbnail}
                                title={post.title}
                                date={post.pubDate}
                                path={post.link}
                            />
                        </div>
                    ))}
                </Swiper>
                <Box sx={styles.carouselBtns}>
                    <button aria-label="left btn" onClick={goPrev}>
                        <FaLongArrowAltLeft/>
                    </button>
                    <button onClick={goNext} aria-label="right btn">
                        <FaLongArrowAltRight/>
                    </button>
                </Box>
            </Container>
        </Box>
    );
};


export default Blog;

const styles = {
    blockTitle: {
        textAlign: 'center',
    },
    features: {
        pt: ['80px', null, null, null, null, null, '120px'],
        pb: ['80px', null, null, null, '170px'],
        backgroundColor: '#F8FAFC',
        '.swiper-slider': {
            overflowY: 'visible',
            overflowX: 'hidden',
        },
    },
    carouselBtns: {
        display: ['flex', null, null, null, null, 'none'],
        justifyContent: 'center',
        alignItems: 'center',
        button: {
            border: 'none',
            outline: 'none',
            backgroundColor: 'transparent',
            fontSize: [2, null, 4, null, 5],
            color: '#BBC7D7',
            width: 'auto',
            padding: [0],
            margin: '0 5px',
            mt: '15px',
            transition: '500ms',
            '&:hover, &:active, &:focus': {
                color: 'primary',
            },
        },
    },
};
