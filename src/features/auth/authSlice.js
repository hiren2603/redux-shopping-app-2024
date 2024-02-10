import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    status: false,
    user: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        loginUser: (state, action)=>{
            console.log(action.payload)
            state.status = true;
            state.user = action.payload;
            localStorage.setItem("token", JSON.stringify(state.user.token));
        },
        logoutUser: (state)=>{
            localStorage.removeItem('token')
            state.status = false;
            state.user = null 
        },
        checkAuthUser: (state, action)=>{
            state.status = action.payload
            
        }
    }
})

export const {loginUser, logoutUser, checkAuthUser} = authSlice.actions;
export default authSlice.reducer;
