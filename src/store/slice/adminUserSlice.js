import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    adminUserInfo: null,
    isAdminLoggedIn: false,
}

export const adminUserDataSlice = createSlice({
    name: 'loginAdminUserData',
    initialState,
    reducers: {
        setAdminUserInfo: (state, action) => {
            state.adminUserInfo = action.payload;
            state.isAdminLoggedIn = true;
        },
        clearAdminUserInfo: (state) => {
            state.adminUserInfo = null;
            state.isAdminLoggedIn = false;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setAdminUserInfo, clearAdminUserInfo } = adminUserDataSlice.actions;

export default adminUserDataSlice.reducer;