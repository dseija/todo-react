import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { UserData } from './userTypes';

interface UserProfileProps {
  user: UserData;
}

const UserProfile = ({ user }: UserProfileProps) => {
  return (
    <>
      <Avatar
        sizes="large"
        sx={{ bgcolor: 'secondary.main', height: 96, width: 96 }}
      />
      <List sx={{ mt: 4, width: '100%' }}>
        <ListItem>
          <ListItemText>First Name</ListItemText>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            sx={{ wordBreak: 'break-all' }}
          >
            {user.firstname}
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText>Last Name</ListItemText>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            sx={{ wordBreak: 'break-all' }}
          >
            {user.lastname}
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText>Email Address</ListItemText>
          <Typography
            variant="subtitle1"
            fontWeight={500}
            sx={{ wordBreak: 'break-all' }}
          >
            {user.username}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default UserProfile;
