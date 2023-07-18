import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postLoginThunk, requestLogin } from "../../reducers/loginSlice";
import KakaoLoginComponent from "./KakaoLoginComponent";

const initState = {
    email: 'user00@aaa.com',
    pw: '1111'
}

const LoginComponent = () => {

    const loginState = useSelector(state => state.login)

    const [loginInfo, setLoginInfo] = useState({ ...initState })

    const dispatch = useDispatch()

    const errorMsg = loginState.errorMsg

    console.log("ERRORMSG: " + errorMsg)

    return (
        <div>
            <div className="flex flex-col justify-center items-center p-4">
                <div className="mx-2 p-2 text-4xl font-extrabold cursor-pointer flex items-center">
                    <span className="text-indigo-600 pt-1 mr-1">
                        <ion-icon name="accessibility-outline"></ion-icon>
                    </span>
                    SUBEOMI
                </div>
                <div className="text-3xl bg-red-500 my-2">
                    {loginState.loading ? '로그인 중' : ''}
                </div>

                {errorMsg ? <div className="text-3xl bg-red-500 my-2">이메일과 패스워드를 다시 확인해 주세요.</div> : <></>}

                <div className="flex items-center mb-2">
                    <div className="flex items-center relative">
                        <div className="absolute left-3 bottom-[4px] ${isFocused ? 'text-blue-500' : 'text-gray-500'}">
                            <ion-icon name="person-outline"></ion-icon>
                        </div>
                        <input
                            className="border-2 border-black pl-8 py-1"
                            type="text" name="email" placeholder="E-MAIL"
                            value={loginInfo.email}
                            onChange={() => { }}
                        ></input>
                    </div>
                </div>

                <div className="flex items-center ">
                    <div className="flex items-center relative">
                        <div className="absolute left-3 bottom-[4px]">
                            <ion-icon name="bag-outline"></ion-icon>
                        </div>
                        <input
                            className="border-2 border-black pl-8 py-1 "
                            type="password" name="pw" placeholder="PASSWORD"
                            value={loginInfo.pw}
                            onChange={() => { }}
                        ></input>
                    </div>
                </div>

                <div className="my-4">
                    <button
                        className="bg-indigo-400 text-white p-2 my-1 w-[213px]"
                        onClick={() => dispatch(postLoginThunk(loginInfo))}>LOGIN</button>
                    <KakaoLoginComponent></KakaoLoginComponent>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;