import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import MainNav from '../pages/MainNav';
import { Route, Redirect } from 'react-router-dom';
import Container from './common/Container';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, getToken } from 'redux/auth/authSelectors';
import { getUserData } from '../redux/book/bookOperations';

const LibraryPage = lazy(() =>
  import(
    '../pages/LibraryPage/LibraryPage' /* webpackChunkName: "library-page" */
  )
);
const TrainingPage = lazy(() =>
  import(
    '../pages/TrainingPage/TrainingPage' /* webpackChunkName: "training-page" */
  )
);
const RegisterPage = lazy(() =>
  import(
    '../pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */
  )
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */)
);

export const App = () => {
  const isAuth = useSelector(getIsAuth);
  // console.log(isAuth);
  const token = useSelector(getToken);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   isAuth && dispatch(getUserData(token));
  // }, [dispatch, isAuth, token]);

  return (
    <Container>
      <MainNav />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Switch>
          <PrivateRoute exact path={'/library'}>
            <LibraryPage />
          </PrivateRoute>
          <PrivateRoute exact path={'/training'}>
            <TrainingPage />
          </PrivateRoute>
          <PublicRoute exact path={'/login'}>
            <LoginPage />
          </PublicRoute>
          <PublicRoute exact path={'/register'}>
            
            <RegisterPage />
          </PublicRoute>
          {isAuth ? <Redirect to="/library" /> : <Redirect to="/login" />}
        </Switch>
      </Suspense>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};
