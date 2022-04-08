import GoogleSingIn from '../GoogleSignIn/GoogleSignIn';
import ErrorMessage from '../common/ErrorMsg/ErrorMsg';
import s from '../SignUpForm/SignUpForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { registerUser } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SingUpForm = () => {
  const { t } = useTranslation();
  
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(t('validation.requiredName'))
        .min(2, t('validation.nameMinLenght'))
        .max(15, t('validation.nameMaxLenght')),
        
    email: Yup.string().email(t('validation.wrongEmail')).required(t('validation.requiredEmail')),

    password: Yup.string()
        .required(t('validation.requiredPassword'))
        .min(6, t('validation.passwordLenght')),

    confirmPassword: Yup.string()
        .required(t('validation.confirmPassword'))
        .oneOf([Yup.ref('password')], t('validation.matchPassword'))       
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
    const {
      register,
      handleSubmit,
      formState,
      reset,
    } = useForm(formOptions);
    const {errors} = formState;

    const onSubmit = (data) => {
      const newData = {name: data.name, email: data.email, password: data.password};
      
      dispatch(registerUser( newData));
      reset();
    }
  
  return (
    <>
      <div className={s.formWrap}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <GoogleSingIn/>

            <label>
              <span className={`${s.label} ${s.firstLabel}`}>{t('signUpForm.name')}<span className={s.requiredField}>*</span></span> 
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

              <label>
              <span className={s.label}>{t('signUpForm.confirmPasswordLabel')}<span className={s.requiredField}>*</span></span>
              <input
                  className={s.input}
                  type="password"
                  placeholder="..."
                  {...register('confirmPassword')}
                />
            </label>
            {errors.confirmPassword?.message && <ErrorMessage message={errors?.confirmPassword.message} />}

            <button type="submit" className={s.signUpBtn}>{t('signUpForm.button')}</button>
          
            <p className={s.logInMessage}>{t('signUpForm.question')}<NavLink className={s.navLink} exact to="/login">
            {t('signUpForm.link')}</NavLink></p>        
          </form>
        </div>
      </>
  )
}

export default SingUpForm;
