import ButtonAdd from "components/ButtonAdd/ButtonAdd";
import useState from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "redux/training/trainingOperatons";
import { getToken } from "redux/auth/authSelectors";

const FormAddBook = () => {
  const token = useSelector(getToken)

  const [formBook, setFormBook] = useState(
    {
      title: "",
      author: "",
      year: "",
      pages: "",
    }
  )

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormBook((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {
      title: "",
      author: "",
      year: "",
      pages: "",
    }
    dispatch(addBook({ newBook, token }))
  }


  return (
    <form>
      <lable>Назва книги
        <input
        name="title"
        value={formBook.title}
        type="text"
        onClick={handleChange}
      /></lable>
      <input
        name="author"
        value={formBook.author}
        type="text"
        onClick={handleChange}
      />
      <input
        name="year"
        value={formBook.year}
        type="text"
        onClick={handleChange}
      />
      <input
        name="pages"
        value={formBook.pages}
        type="text"
        onClick={handleChange}
      />
      <ButtonAdd handleSubmit={handleSubmit} />
    </form>
  );
}

export default FormAddBook;
