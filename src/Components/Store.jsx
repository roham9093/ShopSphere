import { configureStore, createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState : {mostsell : ""}
});
const store = configureStore({reducer :});