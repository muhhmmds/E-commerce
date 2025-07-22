import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Features/CartSlice";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "cart",
    storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
    reducer: {
        allCart: persistedReducer,
    },
    // middleware: thunk,
    middleware: [thunk],
});
const persistor = persistStore(store);
export { persistor };
export default store;
