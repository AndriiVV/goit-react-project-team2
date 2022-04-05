import { Suspense } from 'react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../components/RegisterPage/RegisterPage';
import LibraryPage from '../pages/LibraryPage/LibraryPage';
import TrainingPage from '../pages/TrainingPage/TrainingPage';
import MainNav from '../pages/MainNav';
import { Route } from 'react-router-dom';

export const App = () => {
  return (
    <>
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
    </>
  );
};
