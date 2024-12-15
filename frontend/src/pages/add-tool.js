// filepath: /d:/Programming/Projects/Fullstack/Mai-things/frontend/pages/add-tool.js
import axios from 'axios';
import { useState } from 'react';

const AddTool = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [photo, setPhoto] = useState(null);
    const [icon, setIcon] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('tags', tags);
        formData.append('photo', photo);
        formData.append('icon', icon);

        axios.post('http://localhost:8000/api/tools/', formData)
            .then(response => {
                console.log('Tool added successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the tool!', error);
            });
    };

    return (
        <div>
            <h1>Add New Tool</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div>
                    <label>Tags:</label>
                    <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} required />
                </div>
                <div>
                    <label>Photo:</label>
                    <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
                </div>
                <div>
                    <label>Icon:</label>
                    <input type="file" onChange={(e) => setIcon(e.target.files[0])} required />
                </div>
                <button type="submit">Add Tool</button>
            </form>
        </div>
    );
};

export default AddTool;