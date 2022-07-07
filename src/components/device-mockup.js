import React from 'react';
import Slider from "react-slick";

const DeviceMockup = (props) => {
    const settings = {
        infinite: true,
        speed: 250,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrow: false
    };

    return (
        <div className={`device ${props.device}`}>
            <div className="device-frame">
                <Slider {...settings}>
                    {
                        props.images.map((img, i) =>
                            (<img
                                    key={i}
                                    className="device-content"
                                    src={img}
                                />
                            )
                        )
                    }
                </Slider>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
        </div>
    );
}
export default DeviceMockup;