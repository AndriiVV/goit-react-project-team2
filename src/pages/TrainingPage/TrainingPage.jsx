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
  })

  useEffect(() => {
    localStorage.setItem('newBooks', JSON.stringify(newBooks));
  }, [newBooks]);

  useEffect(() => {
    // console.log(trainingList);
    dispatch(getTraningData())
  }, [])

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
  function daysLeft() {return Math.floor(
    (( Date.parse(trainingList.endDate)-Date.parse(trainingList.startDate)) /
      (1000 * 60 * 60 * 24)) %
      30
  ); }
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
              onClick={() => dispatch(startTraining(trainingList))}
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
                    {daysLeft()}
                  </span>
                </div>
                <span className={s.textBox}>Кількість днів</span>
              </div>
            </div>
          </div>
        </div>
        <div className={s.statisticsFlex}>
          <LineChart className={s.lineChart} />
          <div className={s.resultsBox}>
            <h2 className={s.resultsTitle}>Результати</h2>
            <div className={s.statisticsFlex}>
              <label htmlFor="" className={s.textResults}>
                Дата
                <input type="date" className={s.input} />
              </label>
              <label htmlFor="" className={s.textResults}>
                Кількість сторінок
                <input type="text" className={s.input} />
              </label>
            </div>
            <button type="button" className={s.resultBtn}>
              Додати результат
            </button>
            <h2 className={s.resultsTitle}>Статистика</h2>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
