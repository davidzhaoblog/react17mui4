import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    title: {
      flexGrow: 1,
    },
  }));
  