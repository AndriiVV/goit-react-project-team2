import Container from 'components/common/Container/Container';
import FormAddBook from 'components/FormAddBook/FormAddBook';
import LibraryModal from 'components/LibraryModal/LibraryModal';
import Library from 'components/Library/Library';
import GoingToRead from '../../components/GoingToRead/GoingToRead';
import s from './LibraryPage.module.css';
// import { NavLink } from 'react-router-dom';
// import second from 'first';
import { useSelector } from 'react-redux';
import { getBooks } from 'redux/auth/authSelectors';
import { useState } from 'react';
import GoToReadMobile from 'components/GoingToReadMobile/GoingToReadMobile';
// import { useTranslation } from 'react-i18next';
import LibraryMobile from 'components/LibraryMobile/LibraryMobile';
import LibraryBtn from '../../components/LibraryBtn/LibraryBtn';

const LibraryPage = () => {
  // const { t } = useTranslation();
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

        {/* TODO:<LibraryBtn/> - отключить в версии для мобилки должна быть только 768px и 1280px */}
        <LibraryBtn/>

        {/* <GoingToRead /> */}
        {/* <GoToReadMobile/> */}

        <Library />
        <LibraryMobile/>
        
        {bookList && !isOpenModal && (
          <LibraryModal onClose={closeModal}></LibraryModal>
        )}
      </div>
    </Container>
  );
};

export default LibraryPage;
