import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Allimer from '../../components/Alltimer/Alltimer';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import Container from 'components/common/Container';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import s from './TrainingPage.module.css';
import { getBooks } from '../../redux/auth/authSelectors';
import { getIsTraining, getIsTrainingGo } from '../../redux/training/trainingSelectors';
import LineChart from 'components/LineChart/LineChart';
// import { getTraningData } from 'redux/training/trainingOperatons';
import { startTraining } from '../../redux/training/trainingOperatons';
import TrainigForm from '../../components/TrainingForm/TrainingForm';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Statistics from 'components/Statistics/Statistics';

const TrainingPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const isTraining = useSelector(getIsTraining);
  const isTrainingGo = useSelector(getIsTrainingGo)

  const [inputValue, setInputValue] = useState('');
  const [newBooks, setNewBooks] = useState(
    () => JSON.parse(localStorage.getItem('newBooks')) || []
  );

  const [trainingList, setTrainingList] = useState({
    startDate: '',
    endDate: '',
    books: newBooks.map(({ _id }) => _id),
  });

  const addNewBook = chooseBook => {
    if (inputValue === '') {
      Notify.warning('Оберіть книгу');
    } else if (!inputValue === '') {
      return;
    }

    if (newBooks.includes(chooseBook)) {
      Notify.warning('Книга вже додана у список');
    } else if (inputValue === '') {
      return;
    } else setNewBooks(prevNewBooks => [...prevNewBooks, chooseBook]);

    setTrainingList(prevTrainingList => ({
      ...prevTrainingList,
      books: [...prevTrainingList.books, chooseBook._id],
    }));
  };

  const onSubmit = e => {
    dispatch(startTraining(trainingList));
    // dispatch(getTraningData());
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

            <TrainigForm
              books={books}
              newBooks={newBooks}
              setNewBooks={setNewBooks}
              addNewBook={addNewBook}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />

            <TrainingBookList newBooks={newBooks} />
            <button
              type="button"
              className={s.startTrainingBtn}
              onClick={() => {
                onSubmit();
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
          {isTrainingGo && <Statistics />}

          <LineChart className={s.lineChart} />
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
