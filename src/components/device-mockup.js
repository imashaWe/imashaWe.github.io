import React, {useState} from 'react';
import DeviceFrame from "./device-frame";
import {usePreviewModal} from "./device-mockup-modal";

const DeviceMockup = (props) => {
    const {open,modalData} = usePreviewModal();
    return (
        <>
            <DeviceFrame device={props.device} images={props.images} onClick={() => {open(props);console.log(modalData)}}/>
        </>
    );
}
export default DeviceMockup;

