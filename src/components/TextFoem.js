import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    const handleLoClick = () => {
        setText(text.toLowerCase());
    }

    const handleChange = (event) => {
        // console.log(event.target.value);
        setText(event.target.value);
    }

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} id="1" onChange={handleChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
        <div className="container mt-3">
            <h1>Your text Summary</h1>
            <p>It contains {text.split(" ").length} words and {text.length} characters.</p>
            <p>it will take {0.008 * text.split(" ").length} minutes to read.</p>
        </div>
        </>
    )
}
