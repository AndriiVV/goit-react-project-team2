import { useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'components/common/Container';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import s from './TrainingPage.module.css';
import { getBooks } from '../../redux/auth/authSelectors';
import LineChart from 'components/LineChart/LineChart';

const TrainingPage = () => {
  const books = useSelector(getBooks);

  const [newBooks, setNewBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  const isThereThisBook = ({ books, newBook }) => {
    return books?.some(
      book => book.title.toLowerCase() === newBook.title.toLowerCase()
    );
  };

  // const handleInputChange = e => {
  //   const { value } = e.currentTarget;
  //   if (newBook) {
  //     setNewBook(value);
  //   }

  //   setNewBook('');
  // };

  // const addBookToTraining = newBook => {
  //   const newBookadded = setNewBook({ ...newBook, value });
  //   return newBooks.setNewBooks(newBookadded);
  // };

  const addBookToTraining = newBook => {
    if (newBook) {
      setNewBooks(newBook);
    }
    return newBooks;
  };

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    // dispatch(addBookToTraining({ newBook }));

    if (isThereThisBook(newBook)) {
      alert(`${newBook} already exist`);
      return;
    }
    setNewBook({ ...newBook, value });
    addBookToTraining();
  };

  return (
    <Container>
      <div className={s.trainingPage}>
        <div className={s.trainingPageFlex}>
          <div className={s.trainingContainer}>
            <h2 className={s.trainingTitle}>Моє тренування</h2>
            <form className={s.trainingChooseBook} onSubmit={onSubmit}>
              <input
                type="text"
                name="book"
                list="books"
                placeholder="Обрати книги з бібліотеки"
                className={s.trainingInput}
                // onChange={handleInputChange}
              />
              <datalist id="books">
                {books.map(book => (
                  <option value={book.title} key={book._id} />
                ))}
              </datalist>
              <button
                type="submit"
                className={s.trainingBtn}
                // onClick={addBookToTraining(book)}
              >
                Додати
              </button>
            </form>
            <TrainingBookList newBooks={newBooks} />
          </div>
          <div className={s.trainingGoal}>
            <h2 className={s.trainingTitle}>Моя мета прочитати</h2>
          </div>
        </div>
        <div className={s.lineChart}>
          <LineChart />
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
