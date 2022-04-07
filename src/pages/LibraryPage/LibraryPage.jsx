import FormAddBook from 'components/FormAddBook/FormAddBook';
import LibraryModal from '../../components/LibraryModal/LibraryModal';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const LibraryPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const switchModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      <NavLink exact to="/library">
        <h2>Library Page</h2>
        <FormAddBook />
        <h3>List of books</h3>
      </NavLink>
      <NavLink exact to="/training">
        Training
      </NavLink>
      {isOpenModal && <LibraryModal onClose={switchModal}></LibraryModal>}
    </>
  );
};

export default LibraryPage;
