import googleIcon from '../../images/google-icon.png';
import s from './GoogleSignIn.module.css';
import { GoogleLogin } from 'react-google-login';
const GoogleSingIn = () => {
  // const responseGoogle = response => {
  //   console.log(response);
  // };
  return (
    // <GoogleLogin
    //   clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    //   render={renderProps => (
    <button
      onClick={() => {
        window
          .open('https://bookread-backend.goit.global/auth/google', '_parent')
          .focus();
      }}
      className={s.btn}
      type="button"
    >
      <img src={googleIcon} alt="Google Logo" className={s.googleLogo} />
      Google
    </button>
    //   )}
    //   buttonText="Login"
    //   onSuccess={responseGoogle}
    //   onFailure={responseGoogle}
    //   cookiePolicy={'single_host_origin'}
    // />
  );
};

export default GoogleSingIn;