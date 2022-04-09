import s from '../../pages/TrainingPage/TrainingPage.module.css';
import { useState, useEffect } from 'react';

const TrainigForm = ({
  books,
  newBooks,
  inputValue,
  setInputValue,
  addNewBook,
}) => {
  const [chooseBook, setСhooseBook] = useState({});

  useEffect(() => {
    localStorage.setItem('newBooks', JSON.stringify(newBooks));
  }, [newBooks]);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    const findBook = books.find(book => book.title === value);
    setСhooseBook(findBook);
    setInputValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    addNewBook(chooseBook);
    // if (newBooks.includes(chooseBook)) {
    //   Notify.warning('Книга вже додана у список');
    // } else {
    //   setNewBooks(prevNewBooks => [...prevNewBooks, chooseBook]);
    // }
    // dispatch(startTraining(trainingList));

    setInputValue('');
  };

  return (
    <>
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
    </>
  );
};

export default TrainigForm;
