const ListPageComponent = ({movePage, start, end, prev, next, pageNums, page}) => {

    const handleClickPage = (pageNum) => {
        movePage(pageNum)
    }
    return ( 
        <div className="mt-4 p-2 ">
            <ul className="flex justify-center">
            {prev ? <li 
                        className="mx-2 p-2 bg-gray-500 text-white"
                        onClick={() => handleClickPage(start -1)}
                        >Prev</li> : <></>}

                    {pageNums.map(num => 
                        <li 
                        key={num}
                        tabIndex={page}
                        className={`mx-2 p-2 ${page === num ? "bg-indigo-400" : "bg-gray-500"} text-white active:bg-indigo-800 hover:bg-indigo-600`}
                        onClick={() => handleClickPage(num)}
                        >
                            {num}
                        </li>)}

                    {next ? <li 
                        className="mx-2 p-2 bg-gray-500 text-white"
                        onClick={() => handleClickPage(end +1)}
                        >Next</li> : <></>}
            </ul>
        </div>
     );
}
 
export default ListPageComponent;