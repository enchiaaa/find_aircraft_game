import React from 'react';

const Modal = ({ onClose, children }) => {
    return (
        <div className="backdrop" onClick={onClose}>
            <div onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;