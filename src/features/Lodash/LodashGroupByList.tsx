import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, makeStyles, Typography } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { ExpandMore } from '@material-ui/icons';

import { GroupedTodo } from 'src/models/Todo';
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function LodashGroupByList(): JSX.Element {
  const classes = useStyles();
  const [groupedTodoList, setGroupedTodoList] = useState<GroupedTodo[]>([]);
  useEffect(() => {
    fetch(process.env.REACT_APP_TODOLIST_DATAFILE_URL).then(response => response.json()).then(result => {
      const groupedResult = _.chain(result)
        .groupBy((item) => {
          return item.id.substr(-1);
        })
        .map((value, key) => ({ key, items: value })).value();
      setGroupedTodoList(groupedResult);
      // console.log(groupedResult);
    });
    // console.log('component mounted!')
  }, [])

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Basic 1.10.1. lodash groupBy "last digit of id field"</Typography>
        </AccordionSummary>
        {groupedTodoList && groupedTodoList.map((item: GroupedTodo) => {
          return (
            /* Fix of Warning: Each child in a list should have a unique "key" prop. */
            <AccordionDetails key={item.key}>
              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id={"panel2a-header" + item.key}
                  >
                    <Typography>GroupBy: {item.key}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TableContainer component={Paper}>
                      <Table aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>id</TableCell>
                            <TableCell align="right">completed</TableCell>
                            <TableCell align="right">text</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {item.items.map((todoItem) => (
                            <TableRow key={todoItem.id}>
                              <TableCell component="th" scope="row">
                                {todoItem.id}
                              </TableCell>
                              <TableCell align="right">
                                <Checkbox
                                  checked={todoItem.completed}
                                  name="checkedB"
                                  color="primary"
                                /></TableCell>
                              <TableCell align="right">{todoItem.text}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </AccordionDetails>
                </Accordion>
              </div>
            </AccordionDetails>
          )
        })}
      </Accordion>
    </div>
  );
}