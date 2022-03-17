import * as types from "./actionType"

const initialState = {
    books: [],
    book: {},
    loading: false
}

const bookReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_BOOKS:
            return {
                ...state,
                books: action.payload,



            };
        case types.DELETE_BOOK:
        case types.ADD_BOOK:
        case types.UPDATE_BOOK:

            return {
                ...state,

            };
        case types.GET_SINGLE_BOOK:
            return {
                ...state,
                book: action.payload,

            }


        case types.SET_BOOKS:
            return {
                ...state,
                books: [...state.books, action.payload]
            }
        default:
            return state
    }
}

export default bookReducers