import { useEffect, useState } from "react";
import { getList } from "../../api/productAPI";
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

const ListComponent = ({ queryObj, movePage, moveRead }) => {

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
            <div>
                <ul className="flex flex-wrap">
                    {listData.dtoList.map(dto =>
                        <li
                            className="text-center m-4 p-4 border-2 border-white bg-gray-100 hover:border-indigo-900 hover:font-semibold cursor-pointer"
                            key={dto.pno}
                            onClick={() => moveRead(dto.pno)}
                        >
                            <div className=" w-[150px] h-[150px] ">
                                <img className="border-none" src={`http://localhost/s_${dto.fname}`}></img>
                            </div>
                            <div>
                                <div>
                                    {dto.pname}
                                </div>
                                <div className="text-sm text-gray-600">
                                    \{dto.price}
                                </div>
                                <div>
                                    {dto.reviewCnt} {dto.reviewAvg}
                                </div>
                            </div>
                        </li>)}
                </ul>
            </div>

            {/* <table className="w-full">
                <tbody>
                    {listData.dtoList.map(dto =>
                        <tr key={dto.pno}>
                            <td className="pr-4">{dto.pno}</td>
                            <td>
                                <a href="#" onClick={() => moveRead(dto.pno)}>{dto.pname}</a>
                                <span className="mx-2 text-gray-400">\{dto.price}</span>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table> */}

            <ListPageComponent movePage={movePage} {...listData}></ListPageComponent>
        </div>
    );
}

export default ListComponent;