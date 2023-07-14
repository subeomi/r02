import { createSlice } from "@reduxjs/toolkit";



const countSlice = createSlice({
    name: "CountSlice",
    initialState: { num: 5 },
    reducers: {
        // 첫 번째 파라미터 -> 상태, 두 번째 -> 페이로드, 세 번째는 없음. undefined
        inc: (state, param, third) => {
            console.log(state)
            console.log(param)
            console.log(third)
            console.log("-----------")
            return {num: state.num + param.payload}
        },
        dec: (state, param, third) => {
            console.log(state)
            console.log(param)
            console.log(third)
            console.log("-----------")
            return {num: state.num - param.payload}
        }
    }
})

export const {inc, dec} = countSlice.actions

export default countSlice.reducer