import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Error404Page from '../../pages/error404';
import HomePage from '../../pages/home';
import LoginPage from '../../pages/login';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404Page />}>
      <Route index element={<HomePage />} />
      <Route path="login" element={<LoginPage />} />
    </Route>
  )
);

export default router;
