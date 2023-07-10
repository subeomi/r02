import { useEffect, useState } from "react";
import { deleteReply, getReply, putReply } from "../../api/repliesAPI";

const initState = {
    rno:0,
    bno:0,
    replyText:'',
    replyFile:'',
    replyer:''
}

const ReplyRead = ({rno, cancelRead, refreshPage}) => {

    console.log("Reply Read..." + rno)

    const [reply, setReply] = useState(initState)

    useEffect(() => {

        getReply(rno).then(data => {
            setReply(data)
            console.log(data)
        })

    }, [rno])

    const handleClickDelete = () => {
        deleteReply(rno).then(data => {
            alert(`${data.result}번 댓글이 삭제되었습니다.`)
            refreshPage(true)
        })
    }

    const handleChange = (e) => {
        reply[e.target.name] = e.target.value
        setReply({...reply})
    }

    const handleClickModify = () => {
        putReply(reply).then(data => {
            alert(`${data.result}번 댓글이 수정되었습니다.`)
            refreshPage(true)
        })
    }

    if(reply.replyText === '해당 글은 삭제되었습니다.'){
        return <></>
    }

    return ( 
        <div className="m-8 bg-blue-200 border-2 border-black">
            <div>Reply Read {rno}</div>
            <div>
                <div>{rno}</div>
                <div>{reply.replyer}</div>
                <div><input className="m-2 border-2 border-black" type="text" name="replyText" onChange={handleChange} value={reply.replyText}/></div>
            </div>
            <div>
                <button className="m-2 p-2 border-2 border-green-700" onClick={handleClickModify}>MODIFY</button>
                <button className="m-2 p-2 border-2 border-red-500" onClick={handleClickDelete}>DELETE</button>
                <button className="m-2 p-2 border-2 border-black" onClick={cancelRead}>CANCEL</button>
            </div>
        </div>
     );
}
 
export default ReplyRead;