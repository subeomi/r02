import { useParams } from "react-router-dom";
import useQueryObj from "../../hooks/useQueryObj";
import ModifyComponent from "../../components/products/ModifyComponent";


const ModifyPage = () => {

    const {queryObj, moveList, moveRead} = useQueryObj()
    const {pno} = useParams()

    return (
        <div>
            <ModifyComponent moveList={moveList} pno={pno} modeRead={moveRead}></ModifyComponent>
        </div>
    );
}

export default ModifyPage;