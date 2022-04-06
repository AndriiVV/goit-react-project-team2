import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as LibraryIcon } from '../../images/library-modal-icon.svg';
import { ReactComponent as FlagIcon } from '../../images/flag-modal-icon.svg';
import { ReactComponent as VectorIcon } from '../../images/vector-modal-icon.svg';
import s from './LibraryModal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const LibraryModal = ({ onClose }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const switchModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onKeyDown = event => {
    if (event.code === 'Escape') {
      switchModal();
    }
  };

  const onBackdropClick = event => {
    if (event.currentTarget === event.target) {
      switchModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return createPortal(
    <div className={s.overlay} onClick={onBackdropClick}>
      <div className={s.modal}>
        <ul>
          <li className={s.item}>
            <h2 className={s.title}>Крок 1.</h2>
            <div className={s.firstWrap}>
              <LibraryIcon />
              <p className={s.subTitle}>Створіть особисту бібліотеку</p>
            </div>
            <div className={s.secondWrap}>
              <VectorIcon />
              <p className={s.sent}>
                Додайте до неї книжки, які маєте намір прочитати.
              </p>
            </div>
          </li>
          <li className={s.secItem}>
            <h2 className={s.title}>Крок 2.</h2>
            <div className={s.firstWrap}>
              <FlagIcon />
              <p className={s.secSubTitle}>Сформуйте своє перше тренування</p>
            </div>
            <div className={s.secondWrap}>
              <VectorIcon />
              <p className={s.sent}>
                Визначте ціль, оберіть період, розпочинайте тренування.
              </p>
            </div>
          </li>
        </ul>
        <button type="button" className={s.btnModal} onClick={switchModal}>
          Ok
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default LibraryModal;

// const switchModal = (largeImageURL) => {
//     setIsOpenModal(!isOpenModal);
//     setLargeImageURL(largeImageURL);
//   };

// {isOpenModal && (
//         <Modal onClose={switchModal}>
//         </Modal>
