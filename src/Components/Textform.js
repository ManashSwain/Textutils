import React , {useState} from 'react'

export default function Textform(props) {

//   State Variable

const [text , setText] = useState("");

//   Function to edit the textarea 

const handleOnchange = (event)=>{
  setText(event.target.value);
}

//   Function to convert to uppercase 

const  handleUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase");
}

//   Function to convert to lowerCase 

const handleLow  = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase");
}

// Function to handle extra spaces 

const handleExtra = () => {
    let newText = text.split(/[ ] + /);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces");
}

// Function to clear the text 

const handleClear = () => {
    let newText = "" ;
    setText(newText);
    props.showAlert("Text has been cleared");
}



  return (
    <>
    <div className = {`container my-3 text-${props.color}`} >
      <h2>Try textutils - Word counter, character counter remove extra spaces and many more</h2>
      <div className="form-floating my-3">
      <textarea className={`form-control text-${props.color}`} onChange={handleOnchange}  value = {text} id="floatingTextarea2" style={{height: "300px", background : "transparent"}}></textarea>
      </div>  
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3" onClick={handleUp}>Convert to uppercase</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3" onClick={handleLow}>Convert to lowercase</button> 
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3" onClick={handleExtra}>Remove extra spaces</button>
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-3 my-3" onClick={handleClear}>Clear text</button>
      <h3 className="my-3">Preview</h3>
      <p>{text.length<1 ? "Nothing to Preview" : text}</p>
      <p className="my-4"><b>Number of words: </b> {text.split(/\s+/).filter((element)=>{return element.length!== 0}).length}</p>
      <p className="my-4"><b>Number of characters: </b> {text.length}</p>
    </div>
    </>
  );
}
