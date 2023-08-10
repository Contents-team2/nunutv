import { configureStore, createSlice } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const playModePersistConfig = {
    key: 'playmode',
    storage,
};

const playModeSlice = createSlice({
    name: 'playmode',
    initialState: {
        value: "stop",
        url: null
    },
    reducers: {
        play(state, action) {
            return { ...state, value: "start", url: action.payload };
        },
        stop(state) {
            return { ...state, value: "stop" };
        },
    },
});

const persistedRudecer = persistReducer(playModePersistConfig, playModeSlice.reducer);

const store = configureStore({
    reducer: persistedRudecer
});

export const persistor = persistStore(store);
export const purgeStore = () => persistor.purge();

window.onpopstate = () => {
    purgeStore();
}

export const { play, stop } = playModeSlice.actions;

export default store