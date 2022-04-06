import Container from "components/common/Container";
import Quotation from "components/Quotation/Quotation";
import SingInForm from "components/SignInForm/SignInForm";
import s from './LogInPage.module.css'

const LoginPage = () => { 

  return (
    <Container>
      <div className={s.wrap}>
        <SingInForm/>
        <Quotation/>
      </div>
    </Container>
  )
}

export default LoginPage;