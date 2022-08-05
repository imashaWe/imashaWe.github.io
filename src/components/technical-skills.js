import Swiper from 'react-id-swiper';
import {technologies} from "../utils/technologies";

const TechnicalSkills = () => {
    const items = Object.values(technologies);
    const params = {
        autoplay: {
            delay: 100,
            disableOnInteraction: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        loop: true,
        breakpoints: {
            1024: {
                slidesPerView: 7,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 7,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 7,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 7,
                spaceBetween: 10
            }
        }
    };

    return (
        <>
            <Swiper {...params}>
                {
                    items.map((item, i) => {
                        return (item);
                    })
                }
            </Swiper>
        </>
    );
}

export default TechnicalSkills