import AddForm from "./components/AddForm"
import ListTodos from "./components/ListTodos"
import {BiSolidPencil} from 'react-icons/bi';

function App() {

  return (
    <div className="d-flex flex-column gap-5 p-5">
      <h1 className="text-center">To Do List <BiSolidPencil/></h1>
      <AddForm/>

      <ListTodos/>
    </div>
  )
}

export default App
