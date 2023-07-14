import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../reducers/todoSlice";


const TodoInput = () => {

    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const handleClickSave = () => {
        if(text === ''){
            return
        }
        // 리듀서는 전역이기 때문에 투두내용을 모든곳에 전하겠다는 뜻도 된다
        dispatch(addTodo(text))
        setText('')
    }

    return (
        <div className="shadow-lg items-center flex flex-col w-[800px] m-4 p-2">
            <div>
                <input className="border-2 border-black p-2 w-[600px]" placeholder="내용" type="text" value={text} onChange={e => setText(e.target.value)}></input>
            </div>
            <div>
                <button className="m-2 bg-indigo-400 hover:bg-indigo-500 active:bg-indigo-600 p-2 text-white" onClick={handleClickSave}>SAVE</button>
            </div>
        </div>
    );
}

export default TodoInput;