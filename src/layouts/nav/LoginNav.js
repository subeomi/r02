import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const LoginNav = () => {

    const todoArr = useSelector(state => state.todo)
    const { email, signed } = useSelector(state => state.login)

    console.log("LoginNav...", email, signed)

    if (signed) {
        return (
            <div>
                <div className="flex items-center justify-center text-lg">
                    <div className="text-3xl mx-4 relative">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <span className="w-5 h-5 flex items-center justify-center rounded-full text-white text-base bg-red-500 absolute bottom-[-2px] right-[-6px]">{todoArr.length}</span>
                    </div>
                    <div>
                        {email}
                    </div>
                    <div className="text-4xl flex items-center mx-2 hover:bg-gray-200 cursor-pointer">
                        <ion-icon name="menu-outline"></ion-icon>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <div>
                <Link to="/member/login">LOGIN</Link>
            </div>
        </div>
    );
}

export default LoginNav;