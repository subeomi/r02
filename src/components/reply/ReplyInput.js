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
        <div className="border-2 border-gray-200 my-6 bg-white">
            <div>
                <input className="m-2 p-2" type="text" name="replyer" value={reply.replyer} onChange={handleChange} placeholder="작성자"/>
            </div>
            <div>
                <input className="m-2 p-2 w-[90%]" type="text" name="replyText" value={reply.replyText} onChange={handleChange} placeholder="내용"/>
                <button className="p-2" onClick={handleClickRegister}>
                <ion-icon name="pencil-outline"></ion-icon>
                </button>
            </div>
        </div>
     );
}
 
export default ReplyInput;