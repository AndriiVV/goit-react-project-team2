import ButtonAdd from "components/ButtonAdd/ButtonAdd";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "redux/training/trainingOperatons";
import { getToken } from "redux/auth/authSelectors";

const FormAddBook = () => {
  const token = useSelector(getToken)

  const [formBook, setFormBook] = useState({
      title: "",
      author: "",
      publishYear: "",
      pagesTotal: ""
    })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name: ", name, "value: ", value);
    setFormBook((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addBook({ formBook, token }))
    setFormBook({
      title: "",
      author: "",
      publishYear: "",
      pagesTotal: ""
    })
  }


  return (
    <form >
      <label>Назва книги
        <input
        name="title"
        value={formBook.title}
        type="text"
          onChange={handleChange}
        placeholder="..."
      /></label>
      <label>Автор книги
        <input
          name="author"
          value={formBook.author}
          type="text"
          onChange={handleChange}
          placeholder="..."
        />
      </label>
      <label>Рік випуску
        <input
          name="publishYear"
          value={formBook.year}
          type="text"
          onChange={handleChange}
          placeholder="..."
        />
      </label>
      <label>Кількість сторінок
        <input
          name="pagesTotal"
          value={formBook.pages}
          type="text"
          onChange={handleChange}
          placeholder="..."
        />
      </label>
      <ButtonAdd handleSubmit={handleSubmit}/>
    </form>
  );
}

export default FormAddBook;
