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
const playModePersistedRudecer = persistReducer(playModePersistConfig, playModeSlice.reducer);

const loginPersistConfig = {
    key: 'isLogin',
    storage,
    whitelist: ["isLogin"]
}

const loginSlice = createSlice({
    name: 'isLogin',
    initialState: {
        isLogin: false,
        token: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLogin = true
            state.token = action.payload
        },
        logout: (state) => {
            state.isLogin = false
            state.token = null
        }
    }
})
const loginPersistedRudecer = persistReducer(loginPersistConfig, loginSlice.reducer);


const store = configureStore({
    reducer: {
        playModePersistedRudecer,
        loginPersistedRudecer,
    }
});

export const persistor = persistStore(store);
export const purgeStore = () => persistor.purge();

window.onpopstate = () => {
    purgeStore();
}

export const { play, stop } = playModeSlice.actions;
export const { login, logout } = loginSlice.actions;

export default store