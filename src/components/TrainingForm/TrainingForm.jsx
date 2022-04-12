import s from './TrainingForm.module.css';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

    const findBook = books.goingToRead.find(book => book.title === value);
    setСhooseBook(findBook);
    setInputValue(value);
  };

  // console.log(books);

  const onSubmit = e => {
    e.preventDefault();
    addNewBook(chooseBook);
    setInputValue('');
  };

  const { t } = useTranslation();
  return (
    <form className={s.trainingForm} onSubmit={onSubmit}>
      <input
        type="text"
        name="book"
        list="books"
        autoComplete='off'
        placeholder={t("alldatePicker.input")}
        className={s.trainingInput}
        onChange={handleInputChange}
        value={inputValue}
        style={{paddingRight: 20}}
      />
      <datalist id="books">
        {books.goingToRead.map(book => (
          <option value={book.title} key={book._id} />
        ))}
      </datalist>
      <button type="submit" className={s.addBtn}>
      {t("addingBookForm.button")}
      </button>
    </form>
  );
};

export default TrainigForm;
