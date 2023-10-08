import { useDispatch } from "react-redux";
import {TiTick} from "react-icons/ti";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    // Reducer'a bir şeyin silineceğini 
    // ve hangi elemanın silineceğini haber verme işlemi
    dispatch({
      type: "DELETE_TODO",
      payload: todo.id,
    })
  };

  const handleUpdate = () => {
    // elemanın isDone değerini tersine çevirme
    const updatedTodo = { ...todo, isDone: !todo.isDone };

    // güncel halini reducer'a gönderme
    dispatch({
      type: "UPDATE_TODO",
      payload: updatedTodo,
    });
  };

  return (
    <div className="borded shadow-lg p-4 my-5 rounded">
      <h5>{todo.text}</h5>

      <h6>{todo.isDone ? "Tamamlandı"  : "Devam Ediyor..."}</h6>

      <p>{new Date(todo.date).toLocaleDateString()}</p>

      <button
        onClick={handleUpdate}
        className="btn btn-success">{todo.isDone ? <TiTick/> : "Tamamla"}</button>

      <button
        onClick={handleDelete}
        className="btn btn-danger mx-2">Sil</button>
    </div>
  );
};

export default TodoCard;