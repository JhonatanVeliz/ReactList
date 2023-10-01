import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from '../features/tasks/taskSlice';

import TaskItem from './TaskItem';

const Tasks = () => {

  const taskState = useSelector(state => state.tasks)
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  return (
    <main>

      <nav className='flex justify-between'>
        <h2 className='text-white text-4xl font-semibold'>Lista de Tareas</h2>
        <Link
          to="/create-task"
          className='text-white p-3 rounded bg-red-700 font-bold'
        >Crear Tarea
        </Link>
      </nav>

      {
        taskState.map(({ id, title, description, date }, index) => (
          <TaskItem
            key={id}
            title={title}
            description={description}
            date={date}
            index={index}
          />
        ))
      }
    </main>
  )
}

export default Tasks