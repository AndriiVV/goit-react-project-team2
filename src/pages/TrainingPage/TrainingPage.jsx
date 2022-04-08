import { useState } from 'react';
import { useSelector } from 'react-redux';
import Allimer from '../../components/Alltimer/Alltimer';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import Container from 'components/common/Container';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import s from './TrainingPage.module.css';
import { getBooks } from '../../redux/auth/authSelectors';
import { getIsTraining } from '../../redux/training/trainingSelectors';
import LineChart from 'components/LineChart/LineChart';
import { useEffect } from 'react';
import { startTraining } from '../../redux/training/trainingOperatons';
import { useDispatch } from 'react-redux';

const TrainingPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const isTraining = useSelector(getIsTraining);

  const [newBooks, setNewBooks] = useState(
    () => JSON.parse(localStorage.getItem('newBooks')) || []
  );
  const [chooseBook, setСhooseBook] = useState({});

  useEffect(() => {
    localStorage.setItem('newBooks', JSON.stringify(newBooks));
  }, [newBooks]);

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

  // додати фільтр

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

            {!isTraining && (
              <div className={s.timerFlex}>
                <ALLdatePicker />
              </div>
            )}
            {isTraining && (
              <div className={s.timerFlex}>
                <Allimer />
              </div>
            )}

            <form className={s.trainingChooseBook} onSubmit={onSubmit}>
              <input
                type="text"
                name="book"
                list="books"
                placeholder="Обрати книги з бібліотеки"
                className={s.trainingInput}
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
            <button
              type="button"
              className={s.startTrainingBtn}
              onClick={() =>
                dispatch(
                  startTraining({
                    startDate: '2022-04-08',
                    endDate: '2022-04-12',
                    books: newBooks.map(({ _id }) => _id),
                  })
                )
              }
            >
              Почати тренування
            </button>
          </div>
          <div className={s.trainingGoal}>
            <h2 className={s.trainingTitle}>Моя мета прочитати</h2>
            <div className={s.boxFlex}>
              <div className={s.centredBox}>
                <div className={s.goalBox}>
                  <span className={s.value}>{newBooks.length}</span>
                </div>
                <span className={s.textBox}> Кількість книжок</span>
              </div>
              <div className={s.centredBox}>
                <div className={s.goalBox}>
                  <span className={s.value}>0</span>
                </div>
                <span className={s.textBox}>Кількість днів</span>
              </div>
            </div>
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
