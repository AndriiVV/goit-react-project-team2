import GoogleSingIn from '../GoogleSignIn/GoogleSignIn';
import  ErrorMessage  from '../common/ErrorMsg/ErrorMsg';
import s from './SignInForm.module.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import Header from 'components/common/Header/Header';
import { useTranslation } from 'react-i18next';

const SingInForm = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({      
    email: Yup.string().email('Email is wrong').required('Email is required'),

    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters'),      
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
      console.log('🍒 data', data);
      dispatch(loginUser( data));
      reset();
    }
  
  return (
    <>
      <Header/>
      <div className={s.formWrap}>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <GoogleSingIn/>

          <label>
            <span className={s.label}>{t('signInForm.emailLabel')}<span className={s.requiredField}>*</span></span>            
            <input
                className={s.input}
                type="email"
                placeholder="your@email.com"
                {...register('email')}
              />
          </label>
          {errors.email && <ErrorMessage message={errors.email.message} />}

          <label >
            <span className={s.label}>{t('signInForm.passwordLabel')}<span className={s.requiredField}>*</span></span>
            <input
                className={s.input}
                type="password"
                placeholder="..."
                {...register('password')}
              />
          </label>
          {errors.password && <ErrorMessage message={errors.password.message} />}

          <button type="submit" className={s.signInBtn}>{t('signInForm.button')}</button>
      
          <NavLink className={s.navLink} exact to="/register">
          {t('signInForm.link')}
          </NavLink>    
        </form>
      </div>
    </>
  )
}

export default SingInForm;