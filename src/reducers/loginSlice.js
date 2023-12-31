import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "../util/cookieUtil";
import { postLogin } from "../api/memberAPI";

// 파라미터 첫 번째는 이름, 두 번째는 함수(비동기 함수)
export const postLoginThunk =
    createAsyncThunk('postLoginThunk', (params) => {
        return postLogin(params)
    })

const loadCookie = () => {

    const loginObj = getCookie("login")

    console.log("login...")
    console.log(loginObj)

    if (!loginObj) {
        return initState
    }

    return loginObj
}

const initState = {
    email: '',
    nickname: '',
    admin: false,
    loading: false,
    errorMsg: null
}

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: loadCookie(),
    reducers: {
        requestLogin: (state, param) => {
            const payload = param.payload
            console.log("requestLogin", payload)
            const loginObj = { email: payload.email, nickname: payload.nickname }

            setCookie("login", JSON.stringify(loginObj), 1)

            return loginObj
        },
        requestLogout: (state) => {
            setCookie("login", '', -1);
            return initState;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(postLoginThunk.fulfilled, (state, action) => {
                console.log("fulfilled", action.payload)
                const { email, nickname, admin, errorMsg } = action.payload

                if (errorMsg) {
                    state.errorMsg = errorMsg
                    return
                }

                // state = action.payload

                // state.loading = false
                // state.email = email
                // state.nickname = nickname
                // state.admin = admin
                // console.log("fulfilled after...", {...state})


                setCookie("login", JSON.stringify(action.payload), 1)

                return { ...action.payload, loading: false }
            })
            .addCase(postLoginThunk.pending, (state, action) => {
                console.log("pending")
                state.loading = true
            })
            .addCase(postLoginThunk.rejected, (state, action) => {
                console.log("rejected")
            })
            .addCase('loginSlice/requestLogout', (state, action) => {
                setCookie("login", '', -1); // 쿠키 삭제
                return initState; // 초기 상태로 돌아감
            });
    }
})

// 더 이상 필요가 없음
export const { requestLogout, requestLogin } = loginSlice.actions

export default loginSlice.reducer