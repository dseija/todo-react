import { Container, Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAppDispatch } from '../common/hooks';
import { Layout } from '../features/layout';
import {
  DEFAULT_SETTINGS,
  getSettings,
  SettingsList,
  SettingsState,
} from '../features/settings';
import { setSettingsAction } from '../features/settings/settingsActions';
import { userHasSession } from '../features/user';

export const settingsRouteLoader =
  (fallbackRedirect: () => Promise<void>) => async () => {
    const userLoggedIn = await userHasSession();
    if (!userLoggedIn) return fallbackRedirect();

    const [err, settings] = await getSettings();
    if (err) console.log({ err });

    return settings || DEFAULT_SETTINGS;
  };

const SettingsPage = () => {
  const settings = useLoaderData() as SettingsState;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setSettingsAction(settings));
  }, [settings]);

  return (
    <>
      <Layout>
        <Container maxWidth="xs">
          <Box
            marginTop={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Typography variant="h4" component="h2" marginBottom={4}>
              Settings
            </Typography>
            <SettingsList />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default SettingsPage;
