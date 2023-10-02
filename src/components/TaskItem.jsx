import {dateNow, dateFormat} from "../helpers/date";
import { Link } from "react-router-dom";

const TaskItem = ({ id, title, description, date, index, handleDelete }) => {

  return (
    <div className='p-4 bg-indigo-700 rounded grid gap-3 card'>

      <h2 className='flex justify-between items-center'>
        <span className='font-black text-white'> {title} </span>
        <span className='font-bold text-star card__number'>{index + 1}</span>
      </h2>

      <div className='p-4 bg-indigo-800 rounded'>

        <p className='text-white font-semibold text-start'> {description} </p>

        <p className='text-white font-black flex gap-2 justify-end pt-3'>
          <span>Creada: { dateNow() }</span>
          <span className="text-red-500">Finalizar: { date }</span>
        </p>

      </div>

      <div className='flex gap-2'>

        <button 
          onClick={() => handleDelete(id)}
          className='py-2 px-3 font-bold bg-red-700 text-white rounded'
        >Eliminar
        </button>

        <Link 
          to={`/edit/${id}`}
          className='py-2 px-3 font-bold bg-slate-950 text-white rounded'
        >Editar
        </Link>

      </div>
    </div>
  )
}

export default TaskItem