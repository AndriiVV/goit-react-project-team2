import ExitModalContent from 'components/ExitModalContent/ExitModalContent';
import s from './LogOutModal.module.css'

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRootRef = document.querySelector('#modal-root');

const LogOutModal = ({children, onClose,  onLogOut}) => {

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
    }, [onClose]);

    const handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
          onClose(); 
        }
    };

    return createPortal(
        <div className={s.backdrop} onClick={handleBackdropClick}>
        <div className={s.modal}>

            <div className={setInterval.content}>
            {children}
            <ExitModalContent onLogOut={()=>onLogOut()} onClose={() => onClose()}/>
            </div>
        </div>
        </div>,
        modalRootRef,
    );
};


export default LogOutModal;