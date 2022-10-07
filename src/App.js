import Sidebar from "./components/Sidebar";
import "./App.css";
import { useState } from "react";
import uuid from "react-uuid";
import { getNotes } from "./services/Notes";
import Main from "./components/Main";

function App() {
  const [notes, setNotes] = useState(getNotes());
  const [activeNote, setActiveNote] = useState(false);

  const createNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled Note",
      description: "",
      lastEdited: Date.now(),
    };
    setNotes([newNote, ...notes]);
  };

  const deleteNote = (noteID) => {
    setNotes(notes.filter((n) => n.id !== noteID));
  };

  const getActiveNote = () => {
    return notes.find((n) => n.id === activeNote);
  };

  return (
    <div className="App">
      <Sidebar
        notes={notes}
        onCreateNote={createNote}
        onDeleteNote={deleteNote}
        activeNote={getActiveNote()}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} />
    </div>
  );
}

export default App;
