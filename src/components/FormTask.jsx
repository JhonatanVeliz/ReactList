import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from '../features/tasks/taskSlice';

import { v4 as uuid } from "uuid";

const FormTask = () => {

  const [formValue, setFormValue] = useState({
    title: '',
    description: '',
    date: ''
  });

  const [btnSubmit, setBtnSubmit] = useState('crear');

  const dispatch = useDispatch();
  const taskState = useSelector(state => state.tasks)
  const navigate = useNavigate();
  const params = useParams();

  const handleData = e => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    })
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (Object.values(formValue).includes('')) {
      return console.log(formValue);
    }

    if (params.id) {
      dispatch(updateTask(formValue))
    } else { dispatch(addTask({ ...formValue, id: uuid() })) }

    setFormValue({ title: '', description: '', date: '' });
    navigate('/');
  }

  useEffect(() => {
    if (params.id) {
      setBtnSubmit('guardar')
      setFormValue(taskState.find(task => task.id == params.id));
    }
  }, [])


  return (
    <main className='flex justify-center'>
      <form onSubmit={handleSubmit} className='grid gap-2 pt-5'>

        <label
          htmlFor="title"
          className='text-white font-bold text-start text-2xl'>
          Titulo de la Tarea
        </label>

        <input
          type="text"
          name="title"
          id="title"
          placeholder='Titulo:'
          value={formValue.title}
          onChange={handleData}
          className='p-3 rounded text-xl text-gray-600'
        />

        <label
          htmlFor="description"
          className='text-white font-bold mt-2 text-start text-2xl'
        >
          Descricion de la tarea
        </label>

        <textarea
          type="text"
          name="description"
          id="description"
          placeholder='Descripción:'
          value={formValue.description}
          onChange={handleData}
          className='p-3 rounded text-xl text-gray-600'
        />

        <label
          htmlFor="date"
          className='text-white font-bold mt-2 text-start text-2xl'>
          Fecha para Finalizar
        </label>

        <input
          type="date"
          name="date"
          id="date"
          value={formValue.date}
          onChange={handleData}
          className='text-white bg-red-800 p-2 rounded'
        />

        <input
          type="submit"
          value={btnSubmit}
          className='text-white font-extrabold text-2xl bg-sky-600 p-3 uppercase mt-2 rounded-sm cursor-pointer'
        />

      </form>
    </main>
  )
}

export default FormTask