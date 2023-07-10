import { useEffect, useState } from "react";

const ListSearchComponent = ({moveSearch, queryObj}) => {

    console.log("SearchComponent---------------------")
    
    const [searchObj, setSearchObj] = useState({type:'', keyword:''})

    useEffect(() => {

        searchObj.type = queryObj.type || ''
        searchObj.keyword = queryObj.keyword || ''

        setSearchObj({...searchObj})

    }, [queryObj])

    return ( 
        <div className="p-2 flex items-center justify-center">
            <select 
            className="p-2 border-2" 
            value={searchObj.type}
            onChange={e => {
                searchObj.type = e.target.value
                setSearchObj({...searchObj})
            }}
            >
                <option value={''}>---</option>
                <option value={'t'}>제목</option>
                <option value={'c'}>내용</option>
                <option value={'w'}>작성자</option>
                <option value={'tc'}>제목+내용</option>
                <option value={'tcw'}>제목+내용+작성자</option>
            </select>

            <input 
            type="text" 
            className="ml-2 p-2 border-2"
            value={searchObj.keyword}
            onChange={e => {
                searchObj.keyword = e.target.value
                setSearchObj({...searchObj})
            }}
            ></input>

            <button 
            className="border-2 p-2"
            onClick={e => moveSearch(searchObj.type, searchObj.keyword)}
            >
                <ion-icon name="search-outline"></ion-icon>
            </button>
        </div>
     );
}
 
export default ListSearchComponent;