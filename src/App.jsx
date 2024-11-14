import { useState } from 'react'


import Header from './components/Header'
import Footer from './components/Footer'
import CreateArea from './components/CreateArea'
import Note from './components/Note'

function App() {
  const [count, setCount] = useState(0)
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    console.log(newNote);
  }
  
  function Delete(id){
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });

  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            OnDelete ={Delete}
          />
        );
      })}

      <Footer />
    </div>
  )
  
}

export default App
