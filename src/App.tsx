/* eslint-disable react/jsx-no-undef */
import React, { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Accordion, AccordionDetails, AccordionSummary, Button, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { Computer, ExpandMore } from '@material-ui/icons';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Basic-1.3. i18next
import { supportedLngs } from './i18n';
import { useTranslation } from 'react-i18next';

// Basic-1.4. react-redux
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './layout/appSlice';
import { RootState } from './store/CombinedReducers';

// Basic-1.5. react-router-dom
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import TodoList from './features/Todo/ListPage';

// Basic-1.6. react-cookie
import { useCookies } from 'react-cookie';

// Basic-1.7. axios and react fetch
import ListWithAxios from './features/Todo/ListWithAxios';
import ListWithReactFetch from './features/Todo/ListWithReactFetch';

// Basic-1.8. Forms: 
// Basic-1.8.1. Form: react-hook-form V7
import ReactHookForm from './features/forms/ReactHookForm';
// Basic-1.8.2. Form: Formik V2
import FormikForm from './features/forms/FormikForm';
import LodashGroupByList from './features/Lodash/LodashGroupByList';
import ClsxForm from './features/clsx/ClsxForm';
import DateTimePickerForm from './features/material-ui-pickers-moment/DateTimePickerForm';

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

  const [cookies, setCookie] = useCookies(['cookieTest']);
  useEffect(() => {
    setCookie('cookieTest', 'abcdefg-123', { path: '/' })
  })

  return (
    // For full screen: replace <Container></Container> with <div className={classes.root}></div>
    <Container maxWidth="xl">
      <AppBar position="static">
        <Toolbar>
          <Link to={{ pathname: "https://medium.com/@david.zhao.blog/react-update-2021-p1-for-beginners-70b0a5356e07?source=friends_link&sk=4994d17e77fc5c5a9473c867257c406d" }} target="_blank" >
            <Typography variant="h6" className={classes.title}>
              React17MUI4 - Read Document on Medium.com
            </Typography>
          </Link>
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
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.3">
            <Typography>Basic-1.3. i18next</Typography>
          </AccordionSummary>
          <AccordionDetails>
            current languages: {i18n.language}. languages:
            {supportedLngs.map((lng: string) => {
              return (
                /* Fix of Warning: Each child in a list should have a unique "key" prop. */
                <React.Fragment key={lng}>
                  {lng},
                </React.Fragment>
              );
            })}
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.4. react-redux */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.4">
            <Typography>Basic-1.4. react-redux   {count}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button color="inherit" aria-label="Increment value"
              onClick={() => dispatch(increment())}>Increment</Button>
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.5. react-router-dom */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.5">
            <Typography>Basic-1.5. react-router-dom</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Switch>
              <Route path="/todo" component={TodoList} exact />
            </Switch>
            <NavLink exact={true} to={'/todo'} >
              <ListItem button={true}>
                <ListItemIcon>
                  <Computer />
                </ListItemIcon>
                <ListItemText primary={'todo'} />
              </ListItem>
            </NavLink>
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.6. react-cookie */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.6">
            <Typography>Basic-1.6. react-cookie - {cookies['cookieTest']}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {cookies['cookieTest']}
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.7. axios and react fetch */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.7">
            <Typography>Basic-1.7. axios and react fetch</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListWithAxios />
          </AccordionDetails>
          <AccordionDetails>
            <ListWithReactFetch />
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.8. Forms */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.8">
            <Typography>Basic-1.8. Forms</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.8.1">
                <Typography>Basic-1.8.1. Form: react-hook-form V7</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <ReactHookForm />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.8.2">
                <Typography>Basic-1.8.2. Form: Formik V2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <FormikForm />
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.9. .env and env-cmd */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.9">
            <Typography>Basic-1.9. .env and env-cmd</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This demo is same as Basic.1.7. the todo list datafile is using "process.env.REACT_APP_TODOLIST_DATAFILE_URL" instead of hard-coded "/todos.json"</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <ListWithAxios />
          </AccordionDetails>
          <AccordionDetails>
            <ListWithReactFetch />
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.10. lodash */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.10">
            <Typography>Basic-1.10. lodash</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <LodashGroupByList />
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.11. clsx */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.11">
            <Typography>Basic-1.11. clsx</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ClsxForm />
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.12. @material-ui/pickers and date-fns */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.12">
            <Typography>Basic-1.12. @material-ui/pickers and date-fns</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DateTimePickerForm />
          </AccordionDetails>
        </Accordion>
        {/* Basic-1.13. 2 Popular React Warnings */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.13">
            <Typography>Basic-1.13. 2 Popular React Warnings</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.13.1">
                <Typography>Warning: Each child in a list should have a unique "key" prop. This demo is same as Basic.1.10. Look at the source code of App.tsx and LodashGroupByList.tsx to find out fixes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  return (<p>{"/* Fix of Warning: Each child in a list should have a unique \"key\" prop. in App.tsx */"}</p>
                  return (<p>{"<React.Fragment key={{lng}}>"}</p>
                  return (<p>    {"{{lng}},"}</p>
                  return (<p>{"</React.Fragment>"}</p>
                  return (<p>{"Or"}</p>
                  return (<p>{"/* Fix of Warning: Each child in a list should have a unique \"key\" prop. in LodashGroupByList.tsx */"}</p>
                  return (<p>{"<AccordionDetails key={{item.key}}>"}</p>
                  return (<p>{"..."}</p>
                  return (<p>{"</AccordionDetails>"}</p>
                </div>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <LodashGroupByList />
          </AccordionDetails>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header-basic-1.13.1">
                <Typography>Warning: Failed prop type: Invalid prop `children` supplied to `ForwardRef(…)`, expected a ReactNode. This demo is same as Basic.1.7. Look at the source code of ListWithAxios.tsx and ListWithReactFetch.tsx to find out fixes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  return (<p>{"/* Original Code, with Fix of Warning: Failed prop type: Invalid prop `children` supplied to `ForwardRef(Typography)`, expected a ReactNode. */"}</p>)
                  return (<p>{"<Typography key={{item.id}}>"}</p>)
                  return (<p>{"  /* The reason is following code represents 5 React ReactNodes*/"}</p>)
                  return (<p>{"  /* But some React elements only allow 1 child ReactNode*/"}</p>)
                  return (<p>{"  {{item.id}} - {{item.completed}} - {{item.text}}"}</p>)
                  return (<p>{"</Typography>"}</p>)
                  return (<p>{"/* Fix 1, suggested, 1 React ReactNode */"}</p>)
                  return (<p>{"<Typography key={{item.id}}>"}</p>)
                  return (<p>{"  {{item.id + '-' + item.completed  + '-' + item.text}}"}</p>)
                  return (<p>{"</Typography>"}</p>)
                  return (<p>{"/* Fix 2, not suggested, 5 React ReactNodes */"}</p>)
                  return (<p>{"<Typography key={{item.id}}>"}</p>)
                  return (<p>{"  <> {{item.id}} - {{item.completed}} - {{item.text}} </>"}</p>)
                  return (<p>{"</Typography>"}</p>)
                  return (<p>{"/* Fix 3, not suggested, 15 React ReactNodes */"}</p>)
                  return (<p>{"<Typography key={{item.id}}>"}</p>)
                  return (<p>{"  <React.Fragment> {{item.id}} - {{item.completed}} - {{item.text}}"}</p>)
                  return (<p>{"  </React.Fragment>"}</p>)
                  return (<p>{"</Typography>"}</p>)
                </div>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
          <AccordionDetails>
            <ListWithAxios />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container >
  );
}
