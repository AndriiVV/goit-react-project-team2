import { useDispatch} from 'react-redux';
import { useForm } from 'react-hook-form';
import s from './FormAddBook.module.css'
import ErrorMsg from 'components/common/ErrorMsg/ErrorMsg';
import { addBook } from 'redux/book/bookOperations';
import { useTranslation } from 'react-i18next';

  const FormAddBook = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const titleValidation = {
      required: t('validation.required'),
      minLength: {
        value: 1,
        message: t('validation.length'),
      },
      maxLength: {
        value: 254,
        message: "max - 254 letters",
      },

    };

    const authorValidation = {
      required: t('validation.required'),
      minLength: {
        value: 1,
        message: t('validation.length'),
      },
      maxLength: {
        value: 254,
        message: "max - 254 letters",
      },
    };

    const yearValidation = {
      required: t('validation.required'),
      maxLength: {
        value: 4,
        message: "max - 4 nums",
      },
      // pattern: {
      //   value: /^$/,
      //   message: t('validation.year'),
      // },
    };

    const totalPagesValidation = {
      required: t('validation.required'),
      pattern: {
        value: /^(([1-4][0-9]{0,3})|([1-9][0-9]{0,2})|(5000))$/,
        message: t('validation.pages'),
      },
    };

    const {
      register,
      handleSubmit,
      formState,
      reset,
    } = useForm();

    const {errors} = formState;

    const onSubmit = (book) => {

      dispatch(addBook(book))

      reset();
    }

    return (
      <>
        <button type="button" className={s.arrowBtn}> 	&#10229; </button>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.firstBox}>
            <label className={s.label}>{t('addingBookForm.title')}
              <input
              className={`${s.input} ${s.title}`}
              type="text"
              name="title"
              placeholder="..."
              {...register("title", titleValidation)}
              />
            </label>
            {errors.title && <ErrorMsg message={errors.title.message} />}
          </div>

          <div className={s.wrap}>
            <div>
              <label className={s.label}>{t('addingBookForm.author')}
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
              <label className={s.label}>{t('addingBookForm.year')}
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
              <label className={s.label}>{t('addingBookForm.pages')}
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

          <button className={s.addBtn} type="submit">{t('addingBookForm.button')}</button>
        </form>
      </>
    )
  }

  export default FormAddBook;
