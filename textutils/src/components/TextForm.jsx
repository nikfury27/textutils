import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleReverseClick = () => {
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  }; 
    const [text, setText] = useState('');
    return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8" placeholder="Enter text here"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
        <button className="btn btn-danger " onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary: </h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>Funfact: Humans take 0.48s to read a word on average.</p>
        <p>{0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
