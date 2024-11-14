import React from "react";

function Note(props) {

function Delete(){

  props.OnDelete(props.id)
}

  return (
    
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={Delete}  >DELETE</button>
  </div>

    
  );
}



export default Note;
