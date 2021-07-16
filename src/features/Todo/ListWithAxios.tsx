import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { todoApi } from 'src/apis/TodoApi';
import { Todo } from 'src/models/Todo';

export default function ListWithAxios(): JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
    todoApi.getList().then((result) => {
      setTodoList(result)
    });
    // console.log('component mounted!')
  }, [])

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Basic 1.7.1. get todo List using axios</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {todoList && todoList.map((item: Todo) => {
            return (
              /* Fix of Warning: Failed prop type: Invalid prop `children` supplied to `ForwardRef(Typography)`, expected a ReactNode. */
              <Typography key={item.id}>{item.id + '-' + item.completed  + '-' + item.text}</Typography>
              /* 2 other fixes of Warning: Failed prop type: Invalid prop `children` supplied to `ForwardRef(Typography)`, expected a ReactNode. */
              /* <Typography key={item.id}><> {item.id} - {item.completed} - {item.text} </></Typography> */
              /* <Typography key={item.id}><React.Fragment> {item.id} - {item.completed} - {item.text}</React.Fragment></Typography> */
            )
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}