import { NavLink } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

export default function TodoList(): JSX.Element {
  return (
    <NavLink exact={true} to={'/'} >
      <ListItem button={true}>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary={'home'} />
      </ListItem>
    </NavLink>
  );
}