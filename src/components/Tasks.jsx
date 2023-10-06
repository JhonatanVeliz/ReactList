import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask } from '../features/tasks/taskSlice';

import TaskItem from './TaskItem';

const Tasks = () => {

  const taskState = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

const handleUpdateTask = () => {
  dispatch(updateTask(id))
};

  return (
    <main className='flex flex-col justify-center gap-6 px-2 pb-12 items-center md:items-start md:grid md:grid-cols-2'>

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
            id={id}
            handleDelete={handleDelete}
            handleUpdateTask={handleUpdateTask}
          />
        ))
      }
    </main>
  )
}

export default Tasks