import { lazy, Suspense, useEffect } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import MainNav from '../pages/MainNav';
import { Route } from 'react-router-dom';
import Container from './common/Container';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getIsAuth, getToken } from 'redux/auth/authSelectors';
import { getUserData } from 'redux/auth/authOperations';

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
  import('../pages/RegisterPage/RegisterPage' /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage' /* webpackChunkName: "login-page" */)
);

export const App = () => {
  const isAuth = useSelector(getIsAuth);
  // console.log(isAuth);
  const token = useSelector(getToken);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   isAuth && dispatch(getUserData(token));
  // }, [dispatch, isAuth, token]);

  return (
    <Container>
      <MainNav />
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
         
          <PrivateRoute path={'/library'}>
            <LibraryPage />
          </PrivateRoute>
          <PrivateRoute path={'/training'}>
            <TrainingPage />
          </PrivateRoute>
          <PublicRoute path={'/login'}>
            <LoginPage />
          </PublicRoute>
          <PublicRoute path={'/register'}>
            <RegisterPage />
          </PublicRoute>
          </Switch>
        </Suspense>
      <ToastContainer autoClose={2000} />
    </Container>
  );
};
