import { useState } from "react";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../reducers/loginSlice";

const initState = {
    email: 'user00@aaa.com',
    pw: '1111'
}

const LoginComponent = () => {

    const [loginInfo, setLoginInfo] = useState({ ...initState })
    const [isFocused, setIsFocused] = useState(false);
    const dispatch = useDispatch()

    const handleFocus = () => {
        setIsFocused(true);
        console.log("focus")
        console.log(isFocused)
    };

    const handleBlur = () => {
        console.log("blur")
        setIsFocused(false);
        console.log(isFocused)
    };

    return (
        <div className="my-2">
            <div className="flex items-center mb-2">
                <div className="flex items-center relative">
                    <div className="absolute left-4 bottom-[4px] ${isFocused ? 'text-blue-500' : 'text-gray-500'}">
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <input
                        className="border-2 border-black pl-8 ml-2 py-1"
                        type="text" name="email" placeholder="E-MAIL"
                        value={loginInfo.email}
                        onChange={() => { }}
                        onFocus={handleFocus}
                        onBlur={handleBlur}></input>
                </div>
            </div>

            <div className="flex items-center ">
                <div className="flex items-center relative">
                    <div className="absolute left-4 bottom-[4px]">
                        <ion-icon name="bag-outline"></ion-icon>
                    </div>
                    <input
                        className="border-2 border-black pl-8 ml-2 py-1"
                        type="password" name="pw" placeholder="PASSWORD"
                        value={loginInfo.pw}
                        onChange={() => { }}></input>
                </div>
            </div>
            <div>
                <button onClick={() => dispatch(requestLogin(loginInfo))}>LOGIN</button>
            </div>
        </div>
    );
}

export default LoginComponent;