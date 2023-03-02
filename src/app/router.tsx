import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Error404Page from '../pages/error404';
import HomePage, { homeRouteLoader } from '../pages/home';
import SigninPage, { signinRouteLoader } from '../pages/signin';
import SignupPage, { signupRouteLoader } from '../pages/signup';
import ProfilePage, { profileRouteLoader } from '../pages/profile';
import SettingsPage, { settingsRouteLoader } from '../pages/settings';

export const goToSignin = () =>
  appRouter.navigate('/signin', { replace: true });
export const goToHome = () => appRouter.navigate('/', { replace: true });

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<Error404Page />}>
      <Route
        loader={homeRouteLoader(goToSignin)}
        index
        element={<HomePage />}
      />
      <Route
        path="signin/:action?/:status?"
        loader={signinRouteLoader(goToHome)}
        element={<SigninPage />}
      />
      <Route
        path="signup"
        loader={signupRouteLoader(goToHome)}
        element={<SignupPage />}
      />
      <Route
        path="profile"
        loader={profileRouteLoader(goToSignin)}
        element={<ProfilePage />}
      />
      <Route
        path="settings"
        loader={settingsRouteLoader(goToSignin)}
        element={<SettingsPage />}
      />
    </Route>
  )
);

export default appRouter;
