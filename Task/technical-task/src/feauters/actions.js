import * as types from "./actionType"
import axios from "axios"

const getBooks = (books) => ({
    type: types.GET_BOOKS,
    payload: books
})

const bookDeleted = () => ({
    type: types.DELETE_BOOK,
})

const bookAdded = () => ({
    type: types.ADD_BOOK,
})

const bookUpdated = () => ({
    type: types.UPDATE_BOOK,
})

const getBook = (book) => ({
    type: types.GET_SINGLE_BOOK,
    payload: book
})



const setBooks = (books) => ({
    type: types.SET_BOOKS,
    payload: books

})


export const loadBooks = () => {
    return function(dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getBooks(resp.data))
        }).catch(error => console.log(error))
    }
}


export const deleteBook = (id) => {
    return function(dispatch) {
        axios.delete(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(bookDeleted())
            dispatch(loadBooks())
        }).catch(error => console.log(error))
    }
}

export const addBook = (book, navigate) => {
    return function(dispatch) {


        axios.post(`${process.env.REACT_APP_API}`, book).then((resp) => {

            console.log("resp", resp.data)
            dispatch(setBooks(resp.data))
            dispatch(bookAdded())
            dispatch(loadBooks())
            navigate("/books")


        }).catch(error => console.log(error))
    }
}

export const getSingleBook = (id) => {
    return function(dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch(getBook(resp.data))
                // dispatch(loadBooks())

        }).catch(error => console.log(error))
    }
}

export const updateBook = (book, id) => {
    return function(dispatch) {
        axios.put(`${process.env.REACT_APP_API}/${id}`, book).then((resp) => {
            console.log("resp", resp)
            dispatch(bookUpdated())
            dispatch(loadBooks())

        }).catch(error => console.log(error))
    }
}