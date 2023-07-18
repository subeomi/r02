import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartNav from "./CartNav";
import { requestLogout } from "../../reducers/loginSlice";
import useQueryObj from "../../hooks/useQueryObj";


const LoginNav = () => {

    const { moveMain } = useQueryObj()

    const todoArr = useSelector(state => state.todo)

    const { email, nickname } = useSelector(state => state.login)

    const dispatch = useDispatch()

    console.log("LoginNav...", email)

    const handleLogout = () => {
        dispatch(requestLogout())
    };

    if (email !== '') {
        return (
            <div className="w-[350px]">
                <div className="flex items-center justify-center text-lg">
                    <div className="text-3xl mx-4 relative">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <span
                            className="w-5 h-5 flex items-center justify-center rounded-full text-white text-base bg-red-500 absolute bottom-[-2px] right-[-6px]">
                            {todoArr.length}</span>
                    </div>
                    <div className="px-2 mx-2">
                        <div>
                            <span className="font-semibold">{nickname}</span>님
                        </div>
                        <div className="mt-[-10px] text-gray-400">
                            {email}
                        </div>
                    </div>
                    <button
                        className="flex items-center border-2 border-gray-150 px-2 rounded-3xl text-sm hover:bg-gray-100 cursor-pointer"
                        onClick={handleLogout}
                    >
                        LOGOUT
                        <span className="text-xl pl-2 pt-1">
                            <ion-icon name="log-out-outline"></ion-icon>
                        </span>
                    </button>
                    <div>
                        <CartNav></CartNav>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="w-[350px]">
            <div className="flex items-center text-lg">
                <div>
                    <Link to="/member/login">LOGIN</Link>
                </div>
                <div className="ml-12 px-2 py-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-400 cursor-pointer">
                    SIGN UP
                </div>
            </div>
        </div>
    );
}

export default LoginNav;