import React from 'react'
import "../css/books.css"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

export default function Books() {
    return (
        <div style={{ minHeight: "100vh", width: "85%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <table id="customers">
                <tr>
                    <th>Kitabın adı</th>
                    <th>Kitabın yazarı</th>
                    <th>Kitabın qiyməti</th>
                    <th>Düzəliş et</th>
                </tr>
                <tr>
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
                </tr>

            </table>
        </div>
    )
}
