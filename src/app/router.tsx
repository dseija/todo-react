import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Error404Page from '../pages/error404';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import { getLoggedInUser } from '../features/user';

const userLoggedInValidation = async () => {
  const user = await getLoggedInUser();
  if (!user) return appRouter.navigate('/signin', { replace: true });

  return user;
};

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404Page />}>
      <Route index loader={userLoggedInValidation} element={<HomePage />} />
      <Route path="signin" element={<LoginPage />} />
    </Route>
  )
);

export default appRouter;
