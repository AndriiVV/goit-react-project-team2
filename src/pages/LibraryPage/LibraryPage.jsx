import Container from 'components/common/Container/Container';
import FormAddBook from 'components/FormAddBook/FormAddBook';
// import LibraryModal from 'components/LibraryModal/LibraryModal';
// import Library from 'components/Library/Library';
import GoingToRead from '../../components/GointToRead/GoingToRead';
import s from './LibraryPage.module.css';

const LibraryPage = () => {
  return (
    <Container>
      <div className={s.libraryPage}>
        <FormAddBook />
        {/* <LibraryModal /> */}
        <GoingToRead />
        {/* <Library /> */}
        <button type="button" className={s.libraryBtn}>
          Далі
        </button>
      </div>
    </Container>
  );
};

export default LibraryPage;
