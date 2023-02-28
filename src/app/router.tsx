import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Error404Page from '../pages/error404';
import HomePage from '../pages/home';
import SigninPage from '../pages/signin';
import SignupPage from '../pages/signup';
import { getLoggedInUser } from '../features/user';
import ProfilePage from '../pages/profile';
import SettingsPage from '../pages/settings';

const userLoggedInValidation = async () => {
  const user = await getLoggedInUser();
  if (!user) return appRouter.navigate('/signin', { replace: true });

  return user;
};

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404Page />}>
      <Route index loader={userLoggedInValidation} element={<HomePage />} />
      <Route path="signin/:action?/:status?" element={<SigninPage />} />
      <Route path="signup" element={<SignupPage />} />
      <Route
        path="profile"
        loader={userLoggedInValidation}
        element={<ProfilePage />}
      />
      <Route
        path="settings"
        loader={userLoggedInValidation}
        element={<SettingsPage />}
      />
    </Route>
  )
);

export default appRouter;
