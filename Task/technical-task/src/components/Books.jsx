import React from 'react'
import "../scss/books.scss"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { loadBooks, deleteBook } from '../feauters/actions'

export default function Books() {

    const dispatch = useDispatch()
    const { books } = useSelector(state => state.data)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(loadBooks())
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteBook(id))
    }
    return (
        <div style={{ minHeight: "100vh", width: "75%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", margin: "0px auto" }}>
            <table id="customers">
                <tr>
                    <th>Kitabın adı</th>
                    <th>Kitabın yazarı</th>
                    <th>Kitabın qiyməti</th>
                    <th>Düzəliş et</th>
                </tr>


                {books && books.map((book) => {

                    return <tr key={book.id}>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td><AiFillEdit style={{ fontSize: "16px", margin: "0px 5px", color: "green", cursor: "pointer" }} onClick={() => navigate("/update/" + book.id)} /> <AiFillDelete style={{ fontSize: "16px", margin: "0px 5px", color: "red", cursor: "pointer" }} onClick={() => handleDelete(book.id)} /></td>
                    </tr>
                })}

            </table>
        </div>
    )
}
