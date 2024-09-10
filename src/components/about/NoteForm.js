import React, { useState } from 'react';

function NoteForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        const note = {
            title,
            content,
        };
    
        try {
            const res = await fetch('http://localhost:3030/v1/notes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(note)
            });
    
            if (!res.ok) {
                const errorText = await res.text(); // Retrieve response text for debugging
                console.error('Response Status:', res.status);
                console.error('Response Body:', errorText);
                throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
            }
    
            setTitle('');
            setContent('');
            alert('Note submitted successfully!');
        } catch (error) {
            console.error('Error:', error);
            alert(`There was an error submitting your note: ${error.message}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-white rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Leave a Note</h3>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="content">Content</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Submit Note
            </button>
        </form>
    );
}

export default NoteForm;
