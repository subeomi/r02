import { configureStore } from "@reduxjs/toolkit";
import countslice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";
import loginSlice from "../reducers/loginSlice";


// 이 함수의 결과물이 스토어다.
export default configureStore({
    reducer: {
        counter: countslice,
        todo: todoSlice,
        login: loginSlice
    }
})