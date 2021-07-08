import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { useEffect, useState } from 'react';
import { Todo } from 'src/models/Todo';

export default function ListWithReactFetch(): JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  useEffect(() => {
  fetch(process.env.REACT_APP_TODOLIST_DATAFILE_URL).then(response => response.json()).then(result=>{setTodoList(result);});
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
          <Typography>Basic 1.7.2. get todo List using react fetch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {todoList && todoList.map((item: Todo) => {
            return (
              <Typography key={item.id}>{item.id} - {item.completed} - {item.text}</Typography>
            )
          })}
        </AccordionDetails>
       </Accordion>
   </div>
      );
}