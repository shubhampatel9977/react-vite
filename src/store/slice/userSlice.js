import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: null,
}

export const userDataSlice = createSlice({
    name: 'loginUserData',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
        clearUserInfo: (state) => {
            state.userInfo = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserInfo, clearUserInfo } = userDataSlice.actions;

export default userDataSlice.reducer;