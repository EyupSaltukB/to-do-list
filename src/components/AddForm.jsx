import { useDispatch } from "react-redux";
import { v4 } from "uuid";

const AddForm = () => {
    
    // dispatch kurulum
    const dispatch = useDispatch();
    
    // formun gönderilme olayı
    const handleSubmit = (e) => {
        e.preventDefault();
        // todo objesi oluşturma
        const newTodo = {
            id: v4(),
            text: e.target[0].value,
            isDone: false,
            date: new Date(),
        };
        // reducer'a todoyu store'a eklemesi için emir gönderme
        dispatch({
            type: "ADD_TODO",
            payload: newTodo,
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="d-flex gap-2">
                <input className="form-control" type="text" />
                <button className="btn btn-secondary">Ekle</button>
            </form>
        </div>
    )
}

export default AddForm;