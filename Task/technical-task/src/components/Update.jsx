import React from 'react'
import "../scss/add.scss"
import { useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { useSelector } from 'react-redux'
import { getSingleBook, updateBook } from "../feauters/actions"
import { useNavigate, useParams } from "react-router-dom"

export default function Update() {



    const [state, setState] = useState({
        name: "",
        author: "",
        price: "",
    });
    const { id } = useParams()
    const { book } = useSelector(state => state.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { name, author, price } = state;

    useEffect(() => {
        dispatch(getSingleBook(id))
    }, []);

    useEffect(() => {
        if (book) {
            setState({ ...book })
        }
    }, [book]);

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
            dispatch(updateBook(state, id))
            navigate("/books")
        }
    }
    return (
        <div className="add-section ">
            <div className="card">

                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <div className="section-title">
                        <h1>Kitabın adını dəyiş</h1>
                    </div>
                    <div className="inputs">
                        <label >Kitabın adı</label>
                        <input type="text" placeholder="Kitabın adı" value={name || ""} name="name" onChange={handleInputChange} />
                        <label >Kitabın yazarı</label>
                        <input type="text" placeholder="Kitabın yazarı" value={author || ""} name="author" onChange={handleInputChange} />
                        <label >Kitabın qiyməti</label>
                        <input type="text" placeholder="Kitabın qiyməti" value={price || ""} name="price" onChange={handleInputChange} />
                        <button className="btn" onChange={handleInputChange} onClick={handleSubmit} >Dəyiş</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
