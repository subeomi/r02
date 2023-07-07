import { useEffect, useState } from "react";
import { getList } from "../../api/boardAPI";
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

const ListComponent = ({queryObj, movePage, moveRead}) => {

    const [listData, setListData] = useState(initState)

    // page=1&size=10&type=null&keyword=null
    // console.log(createSearchParams(queryObj).toString())

    useEffect(() => {

        getList(queryObj).then(data => {
            console.log(data)
            setListData(data)
        })

    }, [queryObj])

    return ( 
        <div>
            <div>List Component</div>
            <div>

                <ul>
                    {listData.dtoList.map(dto => 
                        <li 
                        key={dto.bno}
                        onClick={() => moveRead(dto.bno)}
                        >{dto.bno} - {dto.title} - [{dto.replyCount}]</li>
                    )}
                </ul>
            </div>
        <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
     );
}
 
export default ListComponent;