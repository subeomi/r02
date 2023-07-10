import ListComponent from "../../components/board/ListComponent";
import ListSearchComponent from "../../components/board/ListSearchComponent";
import useQueryObj from "../../hooks/useQueryObj";

const ListPage = () => {

  const {queryObj, setSearch, moveRead} = useQueryObj()

  console.log("queryObj --------")
  console.log(queryObj)

  const movePage = (num) => {

    console.log("NUM ------------" + num)
    queryObj.page = num
    setSearch({...queryObj})
  }

  const moveSearch = (type, keyword) => {
    queryObj.page = 1
    queryObj.type = type
    queryObj.keyword = keyword

    setSearch({...queryObj})
  }



  return ( 
    <div>
      <div className="my-20 text-2xl text-center">SUBEOMI BOARD</div>

        
      <ListComponent 
      queryObj={queryObj} 
      movePage = {movePage} 
      moveRead = {moveRead}
      ></ListComponent>
      <ListSearchComponent moveSearch={moveSearch} queryObj={queryObj}></ListSearchComponent>
    </div>  
   );
}
 
export default ListPage;