import { useNavigate } from "react-router-dom";
import RegisterComponent from "../../components/products/RegisterComponent";


const RegisterPage = () => {

    const navigate = useNavigate()

    const moveList = () => {
        navigate('../list')
    }

    return (
        <div>
            Product Register Page
            <div>
                <RegisterComponent moveList={moveList}></RegisterComponent>
            </div>
        </div>
    );
}

export default RegisterPage;