import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormTask from './components/FormTask';
import Tasks from './components/Tasks';

const App = () => {

  return (
    <div className="text-center">
      <BrowserRouter>

        <h1 
          className="text-white font-bold text-center text-6xl my-6 pb-6"
        >Todo App
        </h1>

        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/create-task" element={<FormTask />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App