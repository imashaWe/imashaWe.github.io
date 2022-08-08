import {Box} from "theme-ui";
import Slider from "react-slick";
import React from "react";

const DeviceFrame = (props) => {
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
        <Box sx={styles.mockup} onClick={props.onClick}>

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
        </Box>
    );
}

export default DeviceFrame;

const styles = {
    mockup: {
        '@media screen and (max-width: 960px)': {
            transform: 'scale(0.5)',
        },
    }
}