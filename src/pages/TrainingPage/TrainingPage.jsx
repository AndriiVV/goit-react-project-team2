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
