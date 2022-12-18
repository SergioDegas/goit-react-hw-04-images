import {  useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
 const Modal =({children,onClose})=> {

useEffect(() => {
  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
});

 
 const handleKeyDown = e => {
    if (e.code === 'Escape') {
     onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };


 

    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <ModalWindow>{children}</ModalWindow>
      </Backdrop>,
      modalRoot
    );
  }
export default Modal;
  Modal.propTypes = {
  children: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};