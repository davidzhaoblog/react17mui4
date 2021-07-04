import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Accordion, AccordionDetails, AccordionSummary, Button, makeStyles } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Basic-1.3. i18next
import { supportedLngs } from './i18n';
import { useTranslation } from 'react-i18next';

// Basic-1.4. react-redux
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './layout/appSlice';
import { RootState } from './store/CombinedReducers';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();

  const { t, i18n } = useTranslation(["UIStringResourcePerApp"]);
  document.title = t("UIStringResourcePerApp:Application_Title");

  const count = useSelector((state: RootState) => state.app.value)
  const dispatch = useDispatch()

  return (
    // For full screen: replace <Container></Container> with <div className={classes.root}></div>
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React17MUI4
          </Typography>
        </Toolbar>
      </AppBar>
      <Box my={4}>
        {/* Basic-1.1. create-react-app */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.1">
            <Typography >Basic-1.1. create-react-app</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>React 17.0.2</Typography>
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.2 material-ui/core */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.2">
            <Typography>Basic-1.2 material-ui/core</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Material-UI ^4.11.4</Typography>
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.3. i18next */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.2">
            <Typography>Basic-1.3. i18next</Typography>
          </AccordionSummary>
          <AccordionDetails>
            current languages: {i18n.language}. languages:
            {supportedLngs.map((lng: string) => {
              return (
                <>
                  {lng},
                </>
              );
            })}
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.4. react-redux */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.2">
            <Typography>Basic-1.4. react-redux   {count}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button color="inherit" aria-label="Increment value"
              onClick={() => dispatch(increment())}>Increment</Button>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container >
  );
}
