// import MotivationContent from 'components/MotivationContent/MotivationContent';
import ResumeContent from 'components/ResumeContent/ResumeContent';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { useLockBodyScroll } from 'react-use';
import styles from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

const Modal = ({ onClose, children }) => {
  // useLockBodyScroll(true);

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
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        {/* <header className={styles.header}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </header> */}

        <div className={styles.content}>

          {children}
          <ResumeContent/>
          {/* <MotivationContent/> */}
        </div>
      </div>
    </div>,
    modalRootRef,
  );
};


export default Modal;
