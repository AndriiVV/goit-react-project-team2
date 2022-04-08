import { useState } from 'react';
import { useSelector } from 'react-redux';
import Allimer from '../../components/Alltimer/Alltimer';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import Container from 'components/common/Container';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import s from './TrainingPage.module.css';
import { getBooks } from '../../redux/auth/authSelectors';
import LineChart from 'components/LineChart/LineChart';

const TrainingPage = () => {
  const books = useSelector(getBooks);

  const [newBooks, setNewBooks] = useState([]);
  const [chooseBook, setСhooseBook] = useState({});

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    const findBook = books.find(book => book.title === value);
    setСhooseBook(findBook);
  };

  const addBookToTraining = () => {
    if (chooseBook) {
      setNewBooks(prevNewBooks => [...prevNewBooks, chooseBook]);
    } else alert('Книга вже додана у список');
  };

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget;
    setСhooseBook(value);
  };

  return (
    <Container>
      <div className={s.trainingPage}>
        <div className={s.trainingPageFlex}>
          <div className={s.trainingContainer}>
            <h2 className={s.trainingTitle}>Моє тренування</h2>
            <ALLdatePicker />
            <Allimer />

            <form className={s.trainingChooseBook} onSubmit={onSubmit}>
              <input
                type="text"
                name="book"
                list="books"
                placeholder="Обрати книги з бібліотеки"
                className={s.trainingInput}
                // onClick={() => {
                //   console.log('book.title');
                // }}
                onChange={handleInputChange}
              />
              <datalist id="books">
                {books.map(book => (
                  <option value={book.title} key={book._id} />
                ))}
              </datalist>
              <button
                type="submit"
                className={s.trainingBtn}
                onClick={() => addBookToTraining()}
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
