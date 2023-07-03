import { createSlice } from "@reduxjs/toolkit";

const mainMenuSlice = createSlice({
    name: "menu",
    initialState: {
        isOpenMainMenu: true,
        isOpenLoadingModal: true,
        isOpenRoulesModal: false,
        isOpenSettingsModal: false,
        mainMusic: true,
        gameMusic: true,
    },
    reducers: {
        resetGameMusic(state) {
            state.gameMusic = true;
        },
        toogleGameMusic(state) {
            state.gameMusic ? (state.gameMusic = false) : (state.gameMusic = true);
        },
        resetMainMusic(state) {
            state.mainMusic = true;
        },
        toogleMainMusic(state) {
            state.mainMusic ? (state.mainMusic = false) : (state.mainMusic = true);
        },
        openMainMenu(state) {
            state.isOpenMainMenu = true;
        },
        closeMainMenu(state) {
            state.isOpenMainMenu = false;
        },
        closeLoadingModal(state) {
            state.isOpenLoadingModal = false;
        },
        openRoulesModal(state) {
            state.isOpenRoulesModal = true;
        },
        closeRoulesModal(state) {
            state.isOpenRoulesModal = false;
        },
        openSettings(state) {
            state.isOpenSettingsModal = true;
        },
        closeSettings(state) {
            state.isOpenSettingsModal = false;
        },
    },
});

export default mainMenuSlice.reducer;
export const {
    resetMainMusic,
    resetGameMusic,
    toogleMainMusic,
    toogleGameMusic,
    openMainMenu,
    openSettings,
    closeSettings,
    closeMainMenu,
    closeLoadingModal,
    openRoulesModal,
    closeRoulesModal,
} = mainMenuSlice.actions;
