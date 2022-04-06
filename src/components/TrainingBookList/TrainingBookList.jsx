import s from './TrainingBookList.module.css';

// { filter, books, addBookToTraining }

const TrainingBookList = () => {
  //   const findBook = () => {
  //     return books.filter(book =>
  //       book.name.toLowerCase().includes(filter?.toLowerCase())
  //     );
  //   };

  return (
    <div className={s.booksSection}>
      <h2 className={s.booksTitle}>Список книг</h2>
      <ul className={s.booksList}>
        {/* {findBook().map(book => (
          <li className={s.booksItem} key={book.id}>
            <p className={s.bookName}>
              {book.name}: {book.name}
            </p>
            <button
              type="button"
              className={s.addBtn}
              onClick={() => addBookToTraining(book.id)}
            >
              Додати
            </button>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default TrainingBookList;
