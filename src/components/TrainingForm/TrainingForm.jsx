import s from './TrainingForm.module.css';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const TrainigForm = ({
  books,
  newBooks,
  inputValue,
  setInputValue,
  addNewBook,
}) => {
  const [chooseBook, setСhooseBook] = useState({});
  console.log(books.goingToRead);
  useEffect(() => {
    localStorage.setItem('newBooks', JSON.stringify(newBooks));
  }, [newBooks]);

  const handleInputChange = e => {
    const { value } = e.currentTarget;
    const findBook = books.goingToRead.find(book => book.title === value);
    setСhooseBook(findBook);
    setInputValue(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    // if (!inputValue.includes(books.book.name)) {
    //   Notify.warning('Такої книги не існує');
    // }
    addNewBook(chooseBook);
    setInputValue('');
  };

  return (
    <form className={s.trainingForm} onSubmit={onSubmit}>
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
        {books.goingToRead.map(book => (
          <option value={book.title} key={book._id} />
        ))}
      </datalist>
      <button type="submit" className={s.addBtn}>
        Додати
      </button>
    </form>
  );
};

export default TrainigForm;
