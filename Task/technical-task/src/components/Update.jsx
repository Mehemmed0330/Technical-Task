import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { updateBookData } from '../feauters/Books';
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"


export default function Update() {
    // const book = useSelector((state) =>
    //     state.books.find((book) => book.id === id)
    // );
    const [newName, setNewName] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const navigate = useNavigate()



    const update = () => {
        if (newName && newAuthor && newPrice) {
            dispatch(updateBookData({ id: id, name: newName, author: newAuthor, price: newPrice }))
        }
        navigate("/books")


        setNewName("");
        setNewAuthor("")
        setNewPrice("")
    }
    const dispatch = useDispatch()
    const { id } = useParams()
    return (
        <div>
            <input type="text" placeholder="Kitabin adi" onChange={(e) => setNewName(e.target.value)} />
            <input type="text" placeholder="Kitabin yazari" onChange={(e) => setNewAuthor(e.target.value)} />
            <input type="text" placeholder="Kitabin qiymeti" onChange={(e) => setNewPrice(e.target.value)} />
            <button onClick={update}>Duzelis et</button>
        </div>
    )
}
