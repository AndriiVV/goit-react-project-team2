import Container from 'components/common/Container/Container';
import FormAddBook from 'components/FormAddBook/FormAddBook';
import LibraryModal from 'components/LibraryModal/LibraryModal';
import Library from 'components/Library/Library';
import GoingToRead from '../../components/GointToRead/GoingToRead';
import s from './LibraryPage.module.css';
import { useState } from 'react';

const LibraryPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const switchModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container>
      <div className={s.libraryPage}>
        <FormAddBook />
        {/* <LibraryModal /> */}
        <GoingToRead />
        <Library />
        <button type="button" className={s.libraryBtn}>
          Далі
        </button>
        {isOpenModal && <LibraryModal onClose={switchModal}></LibraryModal>}
      </div>
    </Container>
  );
};

export default LibraryPage;
