import { useState } from 'react';
import { useSelector } from 'react-redux';
import MyTimer from '../../components/Timer/Timer';
import DatePicker from '../../components/Datepicker/Datepicker';
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
  // {/* Code below belong to --TIMER-- Move it Move to statistics page */}
  const time = new Date();
  time.setSeconds(time.getSeconds() + 700); // 10 minutes timer

  let timeend = new Date();
  timeend = new Date(timeend.getFullYear() + 1, 0, 1);

  //-------------------------------
  //////////////datepickerfooUSetosendtoapi
  const [trainingData, setTrainingData] = useState({
    startDate: '',
    endDate: '',
    books: [],
  });
  const setStartDate = startDate => {
    setTrainingData(prev => ({ ...prev, startDate }));
  };
  const setEndDate = endDate => {
    setTrainingData(prev => ({ ...prev, endDate }));
  };
  //////////////////endofdatepickerfoo
  return (
    <Container>
      <div className={s.trainingPage}>
        <div className={s.trainingPageFlex}>
          <div className={s.trainingContainer}>
            <h2 className={s.trainingTitle}>Моє тренування</h2>
            <DatePicker placeholder="Початок" setDate={setStartDate} />
            <DatePicker placeholder="Завершення" setDate={setEndDate} />
            <MyTimer expiryTimestamp={time} />
            <MyTimer expiryTimestamp={timeend} />

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
