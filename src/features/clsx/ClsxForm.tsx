import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles({
  root: {
    width: 240,
    height: 240
  },
  box: {
    padding: 8,
    border: '5px solid #000'
  },
  error: {
    fontSize: 24,
    padding: 18,
    background: 'red',
  },
  success: {
    fontSize: 18,
    padding: 0,
    background: 'green',
  }
});

export default function ClsxForm(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        Regular
      </Box>
      <Box className={clsx(classes.box, classes.error)}>
        Error
      </Box>
      <Box className={clsx(classes.box, classes.success)}>
        Success
      </Box>
    </div>
  );
};