import { useEffect, useState } from "react";
import { getRepliesOfBoard } from "../../api/repliesAPI";
import ListPageComponent from "../common/ListPageComponent";

const initState = {
    dtoList: [],
    end: 0,
    start: 0,
    next: false,
    prev: false,
    pageNums: [],
    page: 0,
    size: 0,
    requestDTO: null
}

const ReplyList = ({ bno, page, last, refresh, movePage, changeCurrent }) => {

    console.log("Reply List... bno: " + bno)

    const [listData, setListData] = useState(initState)

    useEffect(() => {

        getRepliesOfBoard(bno, page, last).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [bno, page, last, refresh])

    return (
        <div>
            <div className="pt-4">
                <ul>
                    {listData.dtoList.map(reply =>
                        <li
                            key={reply.rno}
                            className="my-1"
                            onClick={() => changeCurrent(reply.rno)}
                        >
                            <div className="flex">
                                {reply.replyText.includes('해당 글은 삭제되었습니다.')
                                    ? <div className="text-gray-400 mx-2">{reply.replyText}</div>
                                    : (
                                        <>
                                            <div className="w-[100px] mr-2">
                                                {reply.replyer}
                                            </div>
                                            <div>
                                                {reply.replyText}
                                            </div>
                                        </>
                                    )
                                }
                            </div>

                        </li>)}
                </ul>

                <ListPageComponent {...listData} movePage={movePage}></ListPageComponent>

            </div>
        </div>
    );
}

export default ReplyList;