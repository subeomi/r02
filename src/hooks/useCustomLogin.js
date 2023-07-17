import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// 파라미터안에 함수를 넣을수 있다
const useCustomLogin = (fn) => {

    const loginInfo = useSelector(state => state.login)

    const navigate = useNavigate()

    useEffect(() => {
        // 파라미터로 받은 함수에 ()를 붙이면 실행될 것
        if (fn) {
            if (!loginInfo.email) {
                fn(navigate)
            }
            return
        }

        console.log("signed: ", loginInfo.email)

        if (!loginInfo.email) {
            navigate('/member/login')
            return
        }

    }, [loginInfo.email])

    return { loginInfo }
}

export default useCustomLogin