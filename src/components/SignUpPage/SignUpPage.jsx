import AppDescription from 'components/AppDescription/AppDescription';
import Container from 'components/common/Container';
import SingUpForm from 'components/SingUpForm/SingUpForm';

const SignUpPage = () => {
  return (
    <Container>
      <SingUpForm/>
      <AppDescription/>
    </Container>
  )
}

export default SignUpPage;