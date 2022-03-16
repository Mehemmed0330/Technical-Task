import React from 'react'
import "../css/add.css"

export default function Add() {
    return (
        <div className="add-section ">
            <div className="card">

                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <div className="section-title">
                        <h1>Kitab əlavə et</h1>
                    </div>
                    <div className="inputs">
                        <label >Kitabın adı</label>
                        <input type="text" placeholder="Kitabın adı" />
                        <label >Kitabın yazarı</label>
                        <input type="text" placeholder="Kitabın yazarı" />
                        <label >Kitabın qiyməti</label>
                        <input type="text" placeholder="Kitabın qiyməti" />
                        <button className="btn">Əlavə et</button>
                    </div>

                </div>

            </div>
        </div>
    )
}
