import React, { useEffect, useRef } from 'react';

import PropTypes from 'prop-types';
import { AiOutlineClose } from 'react-icons/ai';

import './modal.css';

const Modal = ({ children: ChildComponent, isOpen, close }) => {
    const modal = useRef(null);
    const handleClickOutside = (event) => {
        if (modal.current && !modal.current.contains(event.target)) {
            close(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    });

    return (
        isOpen && <div ref={modal} className="modal">
            <div className="modal_header">
                <button className="close_button" onClick={() => close(false)}>
                    <AiOutlineClose />
                </button>
            </div>
            <div className="modal_body">
                <ChildComponent close={close} />
            </div>
        </div>
    );
};

Modal.propTypes = {
    close: PropTypes.func,
    isOpen: PropTypes.bool,
    children: PropTypes.elementType
  };

export default Modal;