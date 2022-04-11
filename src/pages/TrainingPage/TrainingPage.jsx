import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'components/common/Container';
import Allimer from '../../components/Alltimer/Alltimer';
import ALLdatePicker from '../../components/Alldatepicker/Alldatepicker';
import TrainigForm from '../../components/TrainingForm/TrainingForm';
import TrainingBookList from '../../components/TrainingBookList/TrainingBookList';
import StartGoal from '../../components/MyGoal/StartGoal';
import ResultGoal from '../../components/MyGoal/ResultGoal';
import LineChart from 'components/LineChart/LineChart';
import Statistics from '../../components/Statistics/Statistics';
import MotivationContent from '../../components/MotivationContent/MotivationContent';
import s from './TrainingPage.module.css';
import {
  getIsTraining,
  checkRender,
  // getIsTrainingGo,
} from '../../redux/training/trainingSelectors';
import { getUserBooks } from '../../redux/book/bookSelectors';
import { getUserData } from 'redux/book/bookOperations';
import { startTraining } from '../../redux/training/trainingOperatons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TrainingPage = () => {
  const books = useSelector(getUserBooks);
  const isTraining = useSelector(getIsTraining);

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
  const checkRenderStart = useSelector(checkRender);
  // const isTrainingGo = useSelector(getIsTrainingGo);

  const [inputValue, setInputValue] = useState('');
  const [newBooks, setNewBooks] = useState(
    () => JSON.parse(localStorage.getItem('newBooks')) || []
  );

  const [trainingList, setTrainingList] = useState({
    startDate: '',
    endDate: '',
    books: newBooks.map(({ _id }) => _id),
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

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

  const deleteTrainingBook = _id => {
    setNewBooks(prev => prev.filter(newBook => newBook._id !== _id));
  };

  const onSubmit = e => {
    if (trainingList.startDate === '') {
      Notify.warning('Виберіть дату початку');
    } else if (trainingList.endDate === '') {
      Notify.warning('Виберіть дату завершення');
    } else {
      dispatch(startTraining(trainingList));
    }
  };

  function daysLeft() {
    return Math.floor(
      ((Date.parse(trainingList.endDate) - Date.parse(trainingList.startDate)) /
        (1000 * 60 * 60 * 24)) %
        30
    );
  }

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <Container>
      <div className={s.trainingPage}>
        {isTraining && <Allimer expiryTimestamp={daysLeft() * 60 * 60 * 24} />}
        <div className={s.trainingPageFlex}>
          {!isTraining && (
            <StartGoal
              daysLeft={daysLeft}
              newBooks={newBooks}
              className={s.startGoal}
            />
          )}
          {isTraining && (
            <ResultGoal
              daysLeft={daysLeft}
              newBooks={newBooks}
              className={s.resultGoal}
            />
          )}
          <div className={s.trainingContainer}>
            <div className={s.mobileModalTraining}>
              <div className={s.startTimer}>
                {!isTraining && (
                  <>
                    <h2 className={s.trainingTitle}>Моє тренування</h2>
                    <ALLdatePicker
                      setTrainingList={setTrainingList}
                      trainingList={trainingList}
                    />
                  </>
                )}
              </div>

              {checkRenderStart && (
                <TrainigForm
                  books={books}
                  newBooks={newBooks}
                  setNewBooks={setNewBooks}
                  addNewBook={addNewBook}
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              )}
            </div>

            <TrainingBookList
              newBooks={newBooks}
              setNewBooks={setNewBooks}
              deleteTrainingBook={deleteTrainingBook}
              isTraining={isTraining}
            />
            {!isTraining && (
              <button
                type="button"
                className={s.startTrainingBtn}
                onClick={() => {
                  onSubmit();
                }}
              >
                Почати тренування
              </button>
            )}
          </div>
        </div>
        <div className={s.motivationModal}>
          {isTraining && !isOpenModal && (
            <MotivationContent closeModal={closeModal} />
          )}
          {/* дописати умову коли закінчився таймер */}
        </div>

        <div className={s.statisticsFlex}>
          <LineChart daysLeft={daysLeft} />
          <Statistics />
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
