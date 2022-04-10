import Container from 'components/common/Container/Container';
import FormAddBook from 'components/FormAddBook/FormAddBook';
import LibraryModal from 'components/LibraryModal/LibraryModal';
import Library from 'components/Library/Library';
import GoingToRead from '../../components/GointToRead/GoingToRead';
import s from './LibraryPage.module.css';
import { NavLink } from 'react-router-dom';
// import second from 'first';
import { useSelector } from 'react-redux';
import { getBooks } from 'redux/book/bookSelectors';
import { useState } from 'react';

const LibraryPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoading = useSelector(state => state.auth.isLoading);

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const books = useSelector(getBooks);
  const bookList = books.length === 0;

  return (
    <Container>
      <div className={s.libraryPage}>
        <FormAddBook />
        <GoingToRead />
        <NavLink to="/training">
          <button type="button" className={s.libraryBtn}>
            Далі
          </button>
        </NavLink>
        {/* <Library /> */}
        {bookList && !isOpenModal && (
          <LibraryModal onClose={closeModal}></LibraryModal>
        )}
      </div>
    </Container>
  );
};

export default LibraryPage;
