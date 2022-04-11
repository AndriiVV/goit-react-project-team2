import Container from 'components/common/Container/Container';
import FormAddBook from 'components/FormAddBook/FormAddBook';
import LibraryModal from 'components/LibraryModal/LibraryModal';
import Library from 'components/Library/Library';
import GoingToRead from '../../components/GoingToRead/GoingToRead';
import s from './LibraryPage.module.css';
// import { NavLink } from 'react-router-dom';
// import second from 'first';

import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/auth/authSelectors';
import { useEffect, useState } from 'react';

import GoingToReadMobile from 'components/GoingToReadMobile/GoingToReadMobile';
import { useTranslation } from 'react-i18next';
import { getUserBooks } from 'redux/book/bookSelectors';
import { getUserData } from 'redux/book/bookOperations';
import LibraryMobile from 'components/LibraryMobile/LibraryMobile';
import LibraryBtnToTraining from '../../components/LibraryBtnToTraining/LibraryBtnToTraining';

const LibraryPage = () => {
  // const { t } = useTranslation();
  const [isOpenModal, setIsOpenModal] = useState(true);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      stateRedux.goingToRead.length === 0
      // stateRedux.goingToRead.length === 0 ||
      // stateRedux.currentlyReading.length === 0
    ) {
      dispatch(getUserData());
    }
  }, [dispatch]);
  const stateRedux = useSelector(getUserBooks);

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  const booksList = useSelector(state => state.book.books.goingToRead);
  const allBooksList = booksList.length === 0;

  return (
    <Container>
      <div className={s.libraryPage}>
        <FormAddBook />

        {/* TODO:<LibraryBtn/> - отключить в версии для мобилки должна быть только 768px и 1280px */}

        <LibraryBtnToTraining />

        {/* <GoingToRead /> */}
        {/* <GoingToReadMobile/> */}

        {/* <LibraryMobile/> */}
        <Library />
        <LibraryMobile />

        {allBooksList && !isOpenModal && (
          <LibraryModal onClose={closeModal}></LibraryModal>
        )}
        <LibraryBtnToTraining />
      </div>
    </Container>
  );
};

export default LibraryPage;
