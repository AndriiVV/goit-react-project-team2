import AppDescription from 'components/AppDescription/AppDescription';
import Container from 'components/common/Container';
import SingUpForm from 'components/SingUpForm/SingUpForm';
import s from './SignUpPage.module.css'

const SignUpPage = () => {
  return (
    <Container>
      <div className={s.wrap}>
        <SingUpForm/>
        <AppDescription/>
      </div>
    </Container>
  )
}

export default SignUpPage;