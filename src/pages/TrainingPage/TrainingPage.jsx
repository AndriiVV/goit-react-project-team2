import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/common/Container';
import Allimer from '../../components/Alltimer/Alltimer';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import TrainigForm from '../../components/TrainingForm/TrainingForm';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import StartGoal from '../../components/MyGoal/StartGoal';
// import ResultGoal from '../../components/MyGoal/ResultGoal';
import LineChart from 'components/LineChart/LineChart';
import Statistics from '../../components/Statistics/Statistics';
import s from './TrainingPage.module.css';
import { getBooks } from '../../redux/auth/authSelectors';
import { getIsTraining } from '../../redux/training/trainingSelectors';
// import { getTraningData } from 'redux/training/trainingOperatons';
import { startTraining } from '../../redux/training/trainingOperatons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TrainingPage = () => {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const isTraining = useSelector(getIsTraining);

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
              <ALLdatePicker
                setTrainingList={setTrainingList}
                trainingList={trainingList}
              />
            )}
            {isTraining && <Allimer />}

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
          <StartGoal
            daysLeft={daysLeft}
            newBooks={newBooks}
            className={s.startGoal}
          />
          {/* <ResultGoal /> */}
        </div>
        <div className={s.statisticsFlex}>
          <LineChart />
          <Statistics />
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
