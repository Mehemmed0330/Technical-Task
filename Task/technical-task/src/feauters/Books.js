import { createSlice } from "@reduxjs/toolkit";
import { BookData } from "./BookData"

export const bookSlice = createSlice({
    name: "books",
    initialState: { value: BookData },
    reducers: {
        addBook: (state, action) => {
            state.value.push(action.payload)

        },
        deleteBook: (state, action) => {
            state.value = state.value.filter((book) => book.id !== action.payload.id)
        },
        updateBookData: (state, action) => {
            // eslint-disable-next-line array-callback-return
            state.value.map((book) => {
                if (book.id === action.payload.id) {
                    book.name = action.payload.name;
                    book.author = action.payload.author;
                    book.price = action.payload.price;
                }
            });
        },
    }
})

export const { addBook, deleteBook, updateBookData } = bookSlice.actions;
export default bookSlice.reducer