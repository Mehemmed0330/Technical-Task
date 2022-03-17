import React from 'react'
import "../scss/add.scss"
// import { addBook } from "../feauters/Books"
import { useDispatch } from 'react-redux'
import { useState } from "react"
import { addBook } from "../feauters/actions"
import { useNavigate } from "react-router-dom"

export default function Add() {


    const [state, setState] = useState({
        name: "",
        author: "",
        price: "",
    });
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { name, author, price } = state;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !author || !price) {
            alert("Zehmet olmasa tam doldurun")
        }
        else {
            dispatch(addBook(state, navigate))
            // navigate("/books")
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
                        <input type="text" placeholder="Kitabın adı" value={name} name="name" onChange={handleInputChange} />
                        <label >Kitabın yazarı</label>
                        <input type="text" placeholder="Kitabın yazarı" value={author} name="author" onChange={handleInputChange} />
                        <label >Kitabın qiyməti</label>
                        <input type="text" placeholder="Kitabın qiyməti" value={price} name="price" onChange={handleInputChange} />
                        <button className="btn" onChange={handleInputChange} onClick={handleSubmit} >Əlavə et</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
