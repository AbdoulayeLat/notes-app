import React, { Component } from "react";
import { Button } from "@mui/material";
import SidebarItem from "./SidebarItem";
import { green } from "@mui/material/colors";
import { NoteAdd } from "@mui/icons-material";

function Sidebar({
  notes,
  onCreateNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <div className="sidebar-main">
      <div className="sidebar-title">
        <h1>Username's Notes</h1>
        <Button
          variant="outlined"
          color="success"
          size="large"
          endIcon={<NoteAdd />}
          onClick={() => onCreateNote()}
        >
          Create a note
        </Button>
      </div>
      {notes.map((note) => (
        <div key={note.id} onClick={() => setActiveNote(note.id)}>
          <SidebarItem
            id={note.id}
            title={note.title}
            description={note.description}
            lastEdited={note.lastEdited}
            onDeleteNote={onDeleteNote}
            activeNote={activeNote}
          />
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
