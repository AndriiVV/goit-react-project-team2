import { lazy, Suspense } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import MainNav from '../pages/MainNav';
import { Route } from 'react-router-dom';
import Container from './common/Container';
import { Switch } from 'react-router-dom';

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
  return (
    <Container>
      <Switch>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Route>
            <MainNav />
          </Route>
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
        </Suspense>
      </Switch>
    </Container>
  );
};
