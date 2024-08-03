import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
    isLoggedIn: false,
}

export const userDataSlice = createSlice({
    name: 'loginUserData',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
            state.isLoggedIn = true;
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
            state.isLoggedIn = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, clearUserInfo } = userDataSlice.actions;

export default userDataSlice.reducer;