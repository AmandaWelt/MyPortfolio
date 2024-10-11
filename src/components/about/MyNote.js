import { useState, useContext } from "react";
import { NotesContext } from "../../context/noteContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Note({ note }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(note.title);
    const [updatedContent, setUpdatedContent] = useState(note.content);

    const { updateNote, deleteNote } = useContext(NotesContext); // Correctly referencing updateNote function

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedNoteData = {
            ...note,
            title: updatedTitle,
            content: updatedContent,
        };

        //call the updateNote function
        await updateNote(updatedNoteData);

        setIsEditMode(false);
    };

    const handleDeleteClick = async () => {
        const confirmDelete = window.confirm('Are you sure you\'d like to delete this note?');
        if (confirmDelete) {
            await deleteNote(note.id);
        }
    };

    return (
        <div className="note-container p-4 bg-gray-800 text-white rounded-lg shadow-lg mb-4">
            {isEditMode ? (
                // Edit mode: show a form with editable title/content
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1" htmlFor="content">Content</label>
                        <textarea
                            id="content"
                            value={updatedContent}
                            onChange={(e) => setUpdatedContent(e.target.value)}
                            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                // Read mode: title and content
                <div>
                    <h3 className="text-xl font-semibold mb-2">{note.title}</h3>
                    <p>{note.content}</p>
                    <button
                        onClick={handleEditClick}
                        className="mt-4 p-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                        <FontAwesomeIcon icon={faPencilAlt} />
                    </button>
                    <button 
                        onClick={handleDeleteClick}
                        className="p-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Note;
