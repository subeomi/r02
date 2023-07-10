import { useEffect, useState } from "react";
import { postReply } from "../../api/repliesAPI";

const initState = {
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyInput = ({bno, refreshLast}) => {

    const [reply, setReply] = useState({...initState})

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickRegister = (e) => {
        reply.bno = bno;

        // {"result":bno}
        postReply(reply).then(data => {
            console.log(data)

            alert(`${data.result}번 댓글이 등록되었습니다.`)

            refreshLast()

            setReply({...initState})
        })
    }

    return ( 
        <div className="m-8 bg-red-200 border-2 border-black">
            <div>Reply Input</div>
            <div>
                <input className="m-2 border-2 border-black" type="text" name="replyText" value={reply.replyText} onChange={handleChange} placeholder="댓글 내용"/>
            </div>
            <div>
            <input className="m-2 border-2 border-black" type="text" name="replyer" value={reply.replyer} onChange={handleChange} placeholder="댓글 작성자"/>
            </div>
            <div>
                <button className="m-2 p-2 border-2 border-black" onClick={handleClickRegister}>Register</button>
            </div>
        </div>
     );
}
 
export default ReplyInput;