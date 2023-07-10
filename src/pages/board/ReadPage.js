import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ReadComponent from "../../components/board/ReadComponent";
import ReplyWrapper from "../../components/reply/ReplyWrapper";

const ReadPage = () => {

    // 커스텀 훅, 이동하려고 쓴 것이다. read -> 목록 or 수정 이동할 때에도 쿼리스트링을 유지하기 위해
    // 같은 로직을 여기저기서 쓰는 걸 커스텀 훅으로 빼놓고 이름만 갖다쓰면 ok
    const {queryObj, moveList} = useQueryObj()
    const {bno} = useParams()

    console.log(bno)
    console.log(queryObj)

    return ( 
        <div>
            Board Read Page<br/>

            <ReadComponent bno={bno}></ReadComponent>

            <ReplyWrapper bno={bno}></ReplyWrapper>
            <button onClick={e => moveList()}>List</button>
        </div>
     );
}
 
export default ReadPage;