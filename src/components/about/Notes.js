import React, { useState, useEffect, useContext } from "react";
import { NotesContext } from "../../context/noteContext";

function Notes() {
  const { notes } = useContext(NotesContext);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-center text-2xl font-bold mb-6">My Notes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {notes.map((note) => (
          <div key={note.id} className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
            <p className="text-sm mb-4">User ID: {note.userId}</p>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;

