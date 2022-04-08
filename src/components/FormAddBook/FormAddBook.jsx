import { useDispatch, useSelector } from 'react-redux';  
import { useForm } from 'react-hook-form';
import s from './FormAddBook.module.css'
import ErrorMsg from 'components/common/ErrorMsg/ErrorMsg';

  const FormAddBook = () => {

    const dispatch = useDispatch();

    const titleValidation = {
      required: 'Year is required',
      minLength: {
        value: 2,
        message: '* more than 1 letter',
      },
    };

    const authorValidation = {
      required: 'Author is required',
      minLength: {
        value: 2,
        message: '* more than 1 letter',
      },
    };

    const yearValidation = {
      required: 'Title is required',
      pattern: {
        value: /^[1-9][0-9]{3}$/,
        message: '* 4 nums',
      },
    };

    const totalPagesValidation = {
      required: 'Total pages is required',
      pattern: {
        value: /^[0-9]+$/,
        message: '* number',
      },
    };

    const {
      register,
      handleSubmit,
      formState,
      reset,
    } = useForm();

    const {errors} = formState;
    console.log('🍒 errors', errors);

    const onSubmit = (book) => {
      console.log('🍒 book', book);

      //TODO: обработать добавление книги

      reset();
    }

    return (
      <>
        <button type="button" className={s.arrowBtn}> 	&#10229; </button>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.firstBox}>
            <label className={s.label}>Назва книги
              <input
              className={`${s.input} ${s.title}`}
              type="text"
              name="title"
              placeholder="..."
              {...register('title', titleValidation)}
              />
            </label>
            {errors.title && <ErrorMsg message={errors.title.message} />}
          </div>

          <div className={s.wrap}>
            <div>
              <label className={s.label}>Автор книги
                <input className={`${s.input} ${s.author}`}
                  type="text"
                  name="author"
                  placeholder="..."
                  {...register('author', authorValidation)}
                />
              </label>
              {errors.author && <ErrorMsg message={errors.author.message} />} 
            </div>

            <div>
              <label className={s.label}>Рік випуску
                <input
                  className={`${s.input} ${s.publishYear}`}
                  type="text"
                  name="publishYear"
                  placeholder="..."
                  {...register('publishYear',yearValidation)}
                />
              </label>
              {errors.publishYear && <ErrorMsg message={errors.publishYear.message} />}
            </div>

            <div>
              <label className={s.label}>Кількість сторінок
                <input
                  className={`${s.input} ${s.pagesTotal}`}
                  type="text"
                  name="pagesTotal"
                  placeholder="..."
                  {...register('pagesTotal', totalPagesValidation)}
                />
              </label>
              {errors.pagesTotal && <ErrorMsg message={errors.pagesTotal.message} />}
            </div> 
          </div>

          <button className={s.addBtn} type="submit">Додати</button>
        </form>
      </>
    )
  }
  
  export default FormAddBook; 
  
// import ButtonAdd from "components/ButtonAdd/ButtonAdd";
// import { useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { addBook } from "redux/training/trainingOperatons";
// import { getToken } from "redux/auth/authSelectors";

// const FormAddBook = () => {
//   const token = useSelector(getToken)

//   const [formBook, setFormBook] = useState({
//       title: "",
//       author: "",
//       publishYear: "",
//       pagesTotal: ""
//     })

//   const dispatch = useDispatch()

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log("name: ", name, "value: ", value);
//     setFormBook((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     dispatch(addBook({ formBook, token }))
//     setFormBook({
//       title: "",
//       author: "",
//       publishYear: "",
//       pagesTotal: ""
//     })
//   }


//   return (
//     <form >
//       <label>Назва книги
//         <input
//         name="title"
//         value={formBook.title}
//         type="text"
//           onChange={handleChange}
//         placeholder="..."
//       /></label>
//       <label>Автор книги
//         <input
//           type="text"
//           name="author"
//           value={formBook.author}
//           onChange={handleChange}
//           placeholder="..."
//         />
//       </label>
//       <label>Рік випуску
//         <input
//           type="text"
//           name="publishYear"
//           value={formBook.year}
//           onChange={handleChange}
//           placeholder="..."
//         />
//       </label>
//       <label>Кількість сторінок
//         <input
//           type="text"
//           name="pagesTotal"
//           value={formBook.pages}
//           onChange={handleChange}
//           placeholder="..."
//         />
//       </label>
//       <ButtonAdd handleSubmit={handleSubmit}/>
//     </form>
//   );
// }

// export default FormAddBook;
