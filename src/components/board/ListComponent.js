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
            <table className="w-full">
                <tbody>
                    {listData.dtoList.map(dto => 
                    <tr key={dto.bno}>
                        <td className="pr-4">{dto.bno}</td>
                        <td>
                            <a href="#" onClick={() => moveRead(dto.bno)}>{dto.title}</a>
                            <span className="mx-2 text-gray-400">[{dto.replyCount}]</span>
                        </td>
                        <td className="text-right">{dto.regDate.split("T")[0]}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
     );
}
 
export default ListComponent;