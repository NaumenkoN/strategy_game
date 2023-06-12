import { createSlice } from "@reduxjs/toolkit";

const mainMenuSlice = createSlice({
    name: "menu",
    initialState: { isOpenMainMenu: true },
    reducers: {
        openMainMenu(state) {
            state.isOpenMainMenu = true;
        },
        closeMainMenu(state) {
            state.isOpenMainMenu = false;
        },
    },
});

export default mainMenuSlice.reducer;
export const { openMainMenu, closeMainMenu } = mainMenuSlice.actions;
