import React from 'react'
import "../css/add.css"
import { addBook } from "../feauters/Books"
import { useDispatch } from 'react-redux'
import { useState } from "react"
import { useSelector } from 'react-redux'

export default function Add() {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("");
    const bookList = useSelector((state) => state.books.value)

    const add = () => {
        if (!name || !author || !price) {
            alert("Zehmet olmasa tam doldurun")
        }
        if (name && author && price) {
            dispatch(addBook({ id: bookList[bookList.length - 1].id + 1, name, author, price }))

            alert("Zehmet olmasa Kitablar bolmesine kecid edin")
        }
    }


    return (
        <div className="add-section ">
            <div className="card">

                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <div className="section-title">
                        <h1>Kitab əlavə et</h1>
                    </div>
                    <div className="inputs">
                        <label >Kitabın adı</label>
                        <input type="text" placeholder="Kitabın adı" onChange={(e) => setName(e.target.value)} />
                        <label >Kitabın yazarı</label>
                        <input type="text" placeholder="Kitabın yazarı" onChange={(e) => setAuthor(e.target.value)} />
                        <label >Kitabın qiyməti</label>
                        <input type="text" placeholder="Kitabın qiyməti" onChange={(e) => setPrice(e.target.value)} />
                        <button className="btn" onClick={add}>Əlavə et</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
