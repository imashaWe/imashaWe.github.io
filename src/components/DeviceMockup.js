import React from 'react';

const DeviceMockup = (props) => {

    return (
        <div className="device device-iphone-x">
            <div className="device-frame">
                <img
                    className="device-content"
                    src={props.src}
                />
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