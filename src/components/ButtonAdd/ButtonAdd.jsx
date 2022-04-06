import { useDispatch } from "react-redux";

const ButtonAdd = ({handleSubmit}) => {

  return (
    <button
      type="submit"
      onClick={handleSubmit}
    >
      Додати
    </button>
   );
}

export default ButtonAdd;
