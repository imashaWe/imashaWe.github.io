import React, {createContext, useContext, useMemo, useState} from "react";
import Modal from 'react-modal';
import DeviceFrame from "./device-frame";

const ModalOpenContext = createContext({
    modalData: null, setModalData: () => {
    }
});

export const usePreviewModal = () => {
    const {modalData, setModalData} = useContext(ModalOpenContext);
    return {
        open: (data) => setModalData(data), close: () => setModalData(null), modalData: modalData
    }
}

export const ModalPreviewProvider = ({children}) => {
    const [modalData, setModalData] = useState(null);
    const value = useMemo(() => ({modalData, setModalData}), [modalData]);
    return (<ModalOpenContext.Provider value={value}>
        {children}
        <Modal
            isOpen={modalData != null}
            className="Modal"
            overlayClassName="Overlay"
        >
            {modalData && <DeviceFrame device={modalData.device} images={modalData.images}/>}

        </Modal>
    </ModalOpenContext.Provider>);
}

