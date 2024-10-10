import React, { useState, useEffect, useContext } from "react";
import { NotesContext } from "../../context/noteContext";
import Note from './MyNote';

function Notes() {
  const { notes } = useContext(NotesContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-6">My Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </div>
    </div>
  );
}

export default Notes;

