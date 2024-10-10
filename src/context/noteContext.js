import React, { createContext, useState, useEffect } from 'react';

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);

    console.log('notes', notes);
    useEffect(() => {
        const fetchNotes = async () => {
            try{
                const response = await fetch('http://localhost:3030/v1/notes');
                const data = await response.json();
                setNotes(data.notes);
            } catch (error) {
                console.error('Error fetching notes:', error);
            }
        };

        fetchNotes();
    }, []);

    const addNote = async (newNote) => {
        console.log('hello');
        try {
            const response = await fetch('http://localhost:3030/v1/notes',{
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                },
                body: JSON.stringify(newNote),
            });

            const data = await response.json();

            setNotes([
                ...notes,
                data.note
            ]);
        } catch (error) {
            console.error('Error adding Note:',error);
        }
    };

    const updateNote = async (updatedNote) => {
        try {
            const response = await fetch(`http://localhost:3030/v1/notes/${updatedNote.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedNote),
            });

            const data = await response.json();

            setNotes((prevNotes) =>
                prevNotes.map((note) => (note.id === data.note.id ? data.note : note))
            );
        } catch (error) {
            console.error('Error updating note:', error);
        }
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, updateNote }}>
            {children}
        </NotesContext.Provider>
    );
};