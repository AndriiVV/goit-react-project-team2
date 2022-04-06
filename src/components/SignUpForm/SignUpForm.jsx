import GoogleSingIn from '../GoogleSignIn/GoogleSignIn';
import  ErrorMessage  from '../common/ErrorMsg/ErrorMsg';
import s from '../SignUpForm/SignUpForm.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { registerUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const SingUpForm = () => {

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required')
        .min(2, 'Field should have more than 1 letter')
        .max(15, 'Field should have less than 15 letter'),
        
    email: Yup.string().email('Email is wrong').required('Email is required'),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),

    confirmPassword: Yup.string()
        .required('Confirm password is required')
        .oneOf([Yup.ref('password')], 'Passwords must match')       
});

  const formOptions = { resolver: yupResolver(validationSchema) };
    const {
      register,
      handleSubmit,
      formState,
      reset,
    } = useForm(formOptions);
    const {errors} = formState;
    // console.log('🍒 errors', errors);

    const onSubmit = (data) => {
      const newData = {name: data.name, email: data.email, password: data.password};
      console.log('🍒 data', data);
      console.log('🍒 newData', newData);

      dispatch(registerUser( newData));
      reset();
    }
  
  return (
    // <Header/>
    <div className={s.formWrap}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <GoogleSingIn/>

          <label>
            <span className={`${s.label} ${s.firstLabel}`}>Ім’я<span className={s.requiredField}>*</span></span> 
            <input
                className={s.input}
                name="name"
                type="text"
                placeholder="..."
                {...register('name')}
              />
          </label>
          {errors.name && <ErrorMessage message={errors.name.message} />}

          <label>
            <span className={s.label}>Електронна адреса<span className={s.requiredField}>*</span></span>            
            <input
                className={s.input}
                type="email"
                placeholder="your@email.com"
                {...register('email')}
              />
          </label>
          {errors.email && <ErrorMessage message={errors.email.message} />}

          <label >
            <span className={s.label}>Пароль<span className={s.requiredField}>*</span></span>
            <input
                className={s.input}
                type="password"
                placeholder="..."
                {...register('password')}
              />
          </label>
          {errors.password && <ErrorMessage message={errors.password.message} />}

            <label>
            <span className={s.label}>Підтвердити пароль<span className={s.requiredField}>*</span></span>
            <input
                className={s.input}
                type="password"
                placeholder="..."
                {...register('confirmPassword')}
              />
          </label>
          {errors.confirmPassword?.message && <ErrorMessage message={errors?.confirmPassword.message} />}

          <button type="submit" className={s.singUpBtn}>Зареєструватися</button>
          {/* button переписать на компонент react-router-dom <NavLink className={s.navLink}></NavLink> */}
          <p className={s.logInMessage}>Вже з нами?<button className={s.navLink}>Увійти</button></p>        
        </form>
      </div>
  )
}

export default SingUpForm;