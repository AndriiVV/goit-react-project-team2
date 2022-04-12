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
import MobileModalStartTraining from '../../components/MobileModalStartTraining/MobileModalStartTraining';
import MotivationContent from '../../components/MotivationContent/MotivationContent';
import s from './TrainingPage.module.css';
import {
  getIsTraining,
  // checkRender,
  // getIsTrainingGo,
} from '../../redux/training/trainingSelectors';
import { getUserBooks } from '../../redux/book/bookSelectors';
import { getUserData } from 'redux/book/bookOperations';
import { getBooksTraining } from '../../redux/training/trainingSelectors';
import {
  getTraningData,
  startTraining,
} from '../../redux/training/trainingOperatons';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useTranslation } from 'react-i18next';

const TrainingPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const books = useSelector(getUserBooks);
  const trainingBooks = useSelector(getBooksTraining);
  const isTraining = useSelector(getIsTraining);
  // const stateRedux = useSelector(getUserBooks);
  // const checkRenderStart = useSelector(checkRender);

  // const isTrainingGo = useSelector(getIsTrainingGo);

  const [inputValue, setInputValue] = useState('');
  const [newBooks, setNewBooks] = useState([]);

  const [trainingList, setTrainingList] = useState({
    startDate: '',
    endDate: '',
    books: newBooks.map(({ _id }) => _id),
  });

  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    !isTraining && dispatch(getTraningData());
  }, [dispatch]);

  const addNewBook = chooseBook => {
    if (inputValue === '') {
      Notify.warning(t('training.select'));
    } else if (!inputValue === '') {
      return;
    }

    if (newBooks.includes(chooseBook)) {
      Notify.warning(t('training.done'));
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
      Notify.warning(t('training.warningStart'));
    } else if (trainingList.endDate === '') {
      Notify.warning(t('training.warningEnd'));
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

  const openModal = () => {
    setIsOpenModal(isOpenModal);
  };

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
            {!isTraining && (
              <div className={s.startTimer}>
                <>
                  <h2 className={s.trainingTitle}>
                    {t('alldatePicker.header')}
                  </h2>
                  <ALLdatePicker
                    setTrainingList={setTrainingList}
                    trainingList={trainingList}
                  />
                </>
              </div>
            )}

            <div className={s.mobileHide}>
              <TrainigForm
                books={books}
                newBooks={newBooks}
                setNewBooks={setNewBooks}
                addNewBook={addNewBook}
                inputValue={inputValue}
                setInputValue={setInputValue}
              />
            </div>

            <TrainingBookList
              newBooks={isTraining ? trainingBooks : newBooks}
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
                {t('training.button')}
              </button>
            )}
          </div>
        </div>

        {isTraining && !isOpenModal && (
          <MotivationContent closeModal={closeModal} />
        )}
        {/* дописати умову коли закінчився таймер */}

        <div className={s.statisticsFlex}>
          <LineChart daysLeft={daysLeft} />
          {
            !isTraining && (
              <button className={s.plusBtn} onClick={() => openModal()}>
                {' '}
                &#43;{' '}
              </button>
            )
            // && (
            //   <MobileModalStartTraining
            //     setTrainingList={setTrainingList}
            //     trainingList={trainingList}
            //     closeModal={closeModal}
            //   />
            // )
          }
          <div className={s.mobileHide}>
            <Statistics />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TrainingPage;
