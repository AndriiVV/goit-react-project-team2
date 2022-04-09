import Container from 'components/common/Container/Container';
import FormAddBook from 'components/FormAddBook/FormAddBook';
import LibraryModal from 'components/LibraryModal/LibraryModal';
import Library from 'components/Library/Library';
import GoingToRead from '../../components/GointToRead/GoingToRead';
import s from './LibraryPage.module.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/training">
          <button type="button" className={s.libraryBtn}>
            Далі
          </button>
        </NavLink>
        {/* <Library /> */}
        {isOpenModal && <LibraryModal onClose={switchModal}></LibraryModal>}
        {/* <LibraryModal onClose={switchModal}></LibraryModal> */}
      </div>
    </Container>
  );
};

export default LibraryPage;
