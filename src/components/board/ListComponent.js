import { useEffect, useState } from "react";
import { createSearchParams } from "react-router-dom";
import { getList } from "../../api/boardAPI";

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

const ListComponent = ({queryObj, movePage}) => {

    const [listData, setListData] = useState(initState)

    // page=1&size=10&type=null&keyword=null
    // console.log(createSearchParams(queryObj).toString())

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [queryObj])

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }

    return ( 
        <div>
            <div>List Component</div>
            <div>
                <ul>
                    {listData.dtoList.map(({bno, title, writer, replyCount}) => <li key={bno}>{bno} - {title} - [{replyCount}]</li>)}
                </ul>
            </div>

            <div className="m-4 p-2">
                <ul className="flex justify-center">

                    {listData.prev ? <li 
                        className="m-2 p-2 bg-gray-500 text-white"
                        onClick={() => handleClickPage(listData.page -1)}
                        >Prev</li> : <></>}

                    {listData.pageNums.map(num => 
                        <li 
                        key={num}
                        // tabIndex={0}
                        className="m-2 p-2 bg-gray-500 text-white active:bg-indigo-800"
                        onClick={() => handleClickPage(num)}
                        >{num}</li>)}

                    {listData.next ? <li 
                        className="m-2 p-2 bg-gray-500 text-white"
                        onClick={() => handleClickPage(listData.page +1)}
                        >Next</li> : <></>}

                </ul>
            </div>
        </div>
     );
}
 
export default ListComponent;