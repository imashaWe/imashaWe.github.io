import Swiper from 'react-id-swiper';
import {technologies} from "../utils/technologies";
import Slider from "react-slick";

const TechnicalSkills = () => {
    const items = Object.values(technologies);
    const params = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        width: 6000,
        cssEase: "linear"
    };

    return (
        <>
            <Slider {...params}>
                {
                    items.map((item, i) => {
                        return (item);
                    })
                }
            </Slider>
        </>
    );
}

export default TechnicalSkills