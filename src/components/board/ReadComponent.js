import { useEffect, useState } from "react";
import { getOne } from "../../api/boardAPI";

const initState = {
    bno:0,
    title:'',
    content:'',
    writer:'',
    regDate:'',
    modDate:''
}

const ReadComponent = ({bno}) => {

    const [board, setBoard] = useState(initState)

    useEffect(() => {
        getOne(bno).then(data => {
            setBoard(data)
        })
    }, [bno])

    return ( 
        <div>
            <div className="text-2xl font-bold">
                {board.title}
            </div>
            <div className="flex py-2">
                <div>
                    {board.writer}
                </div>
                <div className="text-gray-400 pb-2 pl-2">
                    {board.regDate}
                </div>
            </div>
            <hr/>
            <div className="py-20">
                {board.content}
            </div>
            
        </div>
     );
}
 
export default ReadComponent;