import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { updateBookData } from '../feauters/Books';
import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';


export default function Update() {
    const book = useSelector((state) =>
        state.books.find((book) => book.id === id)
    );
    const [newName, setNewName] = useState(book.name);
    const [newAuthor, setNewAuthor] = useState(book.author);
    const [newPrice, setNewPrice] = useState(book.price);



    const update = () => {
        if (newName && newAuthor && newPrice) {
            dispatch(updateBookData({ id: id, newName, newAuthor, newPrice }))
        }
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
