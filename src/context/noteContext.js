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

    return (
        <NotesContext.Provider value={{ notes, addNote }}>
            {children}
        </NotesContext.Provider>
    );
};