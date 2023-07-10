import { useEffect, useState } from "react";
import ReplyList from "./ReplyList";

const initState = {
    bno: 0,
    page: 1,
    last: false
}

const ReplyWrapper = ({bno}) => {

    const [data, setData] = useState(initState)

    useEffect(() => {

        data.bno = bno
        data.last = true
        data.page = 1

        setData({...data})

    }, [bno])

    const movePage = (num) => {
        data.page = num
        data.last = false
        setData({...data})
        console.log("movePage..")
    }

    return (
        <div>
            <ReplyList {...data} movePage={movePage}></ReplyList>
        </div>
    );
}

export default ReplyWrapper;