import React from 'react'
import "../css/books.css"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { useSelector } from "react-redux"
import { deleteBook } from "../feauters/Books"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"


export default function Books() {
    const bookList = useSelector((state) => state.books.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div style={{ minHeight: "100vh", width: "85%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <table id="customers">
                <tr>
                    <th>Kitabın adı</th>
                    <th>Kitabın yazarı</th>
                    <th>Kitabın qiyməti</th>
                    <th>Düzəliş et</th>
                </tr>
                {/* <tr>
                    <td>Umidlerin izi ile</td>
                    <td>Semil Sadiq</td>
                    <td>10 azn</td>
                    <td><AiFillEdit style={{ fontSize: "16px", margin: "0px 5px", color: "green" }} /> <AiFillDelete style={{ fontSize: "16px", margin: "0px 5px", color: "red" }} /></td>
                </tr>
                <tr>
                    <td>Umidlerin izi ile</td>
                    <td>Semil Sadiq</td>
                    <td>10 azn</td>
                    <td><AiFillEdit style={{ fontSize: "16px", margin: "0px 5px", color: "green" }} /> <AiFillDelete style={{ fontSize: "16px", margin: "0px 5px", color: "red" }} /></td>
                </tr> */}
                {bookList.map((book) => {
                    return <tr>
                        <td>{book.name}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td><AiFillEdit style={{ fontSize: "16px", margin: "0px 5px", color: "green", cursor: "pointer" }} onClick={() => navigate("/update/" + book.id)} /> <AiFillDelete style={{ fontSize: "16px", margin: "0px 5px", color: "red", cursor: "pointer" }} onClick={() => { dispatch(deleteBook({ id: book.id })) }} /></td>
                    </tr>
                })}

            </table>
        </div>
    )
}
