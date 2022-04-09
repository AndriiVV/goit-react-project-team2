import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Allimer from '../../components/Alltimer/Alltimer';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import Container from 'components/common/Container';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import s from './TrainingPage.module.css';
import { getBooks } from '../../redux/auth/authSelectors';
import { getIsTraining } from '../../redux/training/trainingSelectors';
import LineChart from 'components/LineChart/LineChart';
import { useEffect } from 'react';
import { getTraningData } from 'redux/training/trainingOperatons';
import { startTraining } from '../../redux/training/trainingOperatons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TrainingPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const isTraining = useSelector(getIsTraining);

  const [newBooks, setNewBooks] = useState(
    () => JSON.parse(localStorage.getItem('newBooks')) || []
  );
  const [chooseBook, setСhooseBook] = useState({});
  const [trainingList, setTrainingList] = useState({
    startDate: '',
    endDate: '',
    books: newBooks.map(({ _id }) => _id),
  });

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('newBooks', JSON.stringify(newBooks));
  }, [newBooks]);

  useEffect(() => {
    dispatch(getTraningData());
  }, []);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    const findBook = books.find(book => book.title === value);
    setСhooseBook(findBook);
    setInputValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (newBooks.includes(chooseBook)) {
      Notify.warning('Книга вже додана у список');
    } else if (inputValue === '') {
      Notify.warning('Оберіть книгу');
    } else {
      setNewBooks(prevNewBooks => [...prevNewBooks, chooseBook]);
    }

    setInputValue('');
  };

  function daysLeft() {
    return Math.floor(
      ((Date.parse(trainingList.endDate) - Date.parse(trainingList.startDate)) /
        (1000 * 60 * 60 * 24)) %
        30
    );
  }
  return (
    <Container>
      <div className={s.trainingPage}>
        <div className={s.trainingPageFlex}>
          <div className={s.trainingContainer}>
            <h2 className={s.trainingTitle}>Моє тренування</h2>
            {!isTraining && (
              <div className={s.timerFlex}>
                <ALLdatePicker
                  setTrainingList={setTrainingList}
                  trainingList={trainingList}
                />
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
                value={inputValue}
              />
              <datalist id="books">
                {books.map(book => (
                  <option value={book.title} key={book._id} />
                ))}
              </datalist>
              <button
                type="submit"
                className={s.trainingBtn}
                // onClick={() => addBookToTraining()}
              >
                Додати
              </button>
            </form>
            <TrainingBookList newBooks={newBooks} />
            <button
              type="button"
              className={s.startTrainingBtn}
              onClick={() => {
                console.log(trainingList);
                dispatch(startTraining(trainingList));
              }}
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

                  <span className={s.value}>
                    {isNaN(daysLeft()) ? 0 : daysLeft()}
                  </span>

                </div>
                <span className={s.textBox}>Кількість днів</span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.statisticsFlex}>
          <LineChart className={s.lineChart} />
          
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
