import { useDispatch } from "react-redux";

const ButtonAdd = () => {
const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newBook = {
      title: "",
      author: "",
      year: "",
      pages: "",
    }
  }

  return (
    <button
      type="submit"
      onClick={null}
    >
      Додати
    </button>
   );
}

export default ButtonAdd;
