import Container from 'components/common/Container';
import GoogleSingIn from 'components/GoogleSingIn/GoogleSingIn';
import s from './SignUpPage.module.css';



const SignUpPage = () => {
  // const isBtnDisabled =
  return (
    <Container>
      {/* компонент Header */}
      <div className={s.wrap}>
        <form className={s.form}>
          <GoogleSingIn/>
          <label>
            <span className={`${s.label} ${s.firstLabel}`}>Ім’я<span className={s.requiredField}>*</span></span> 
            <input
                className={s.input}
                name="name"
                // value={value}
                type="text"
                placeholder="..."
                required
              />
          </label>

          <label>
            <span className={s.label}>Електронна адреса<span className={s.requiredField}>*</span></span>            
            <input
                className={s.input}
                name="email"
                // value={value}
                type="email"
                placeholder="your@email.com"
                required
              />
          </label>

          <label >
            <span className={s.label}>Пароль<span className={s.requiredField}>*</span></span>
            <input
                className={s.input}
                name="password1"
                // value={value}
                type="password"
                placeholder="..."
                required
              />
          </label>

            <label>
            <span className={s.label}>Підтвердити пароль<span className={s.requiredField}>*</span></span>
            <input
                className={s.input}
                name="password2"
                // value={value}
                type="password"
                placeholder="..."
                required
              />
          </label>
          {/* disabled={isBtnDisabled} */}
          <button type="submit" className={`${s.registerBtn} ${s.authBtn}`}>Зареєструватися</button>
          {/* button переписать на компонент react-router-dom <NavLink className={s.navLink}></NavLink> */}
          <p className={s.logInMessage}>Вже з нами?<button className={s.navLink}>Увійти</button></p>        
        </form>
      </div>
    </Container>
  )
}

export default SignUpPage;