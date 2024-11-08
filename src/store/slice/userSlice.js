import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
    loginInfo: null,
}

export const userDataSlice = createSlice({
    name: 'loginUserData',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        setLoginInfo: (state, action) => {
            state.loginInfo = action.payload;
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            state.loginInfo = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, setLoginInfo, clearUserInfo } = userDataSlice.actions;

export default userDataSlice.reducer;