import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import { fetchTools } from '../services/api';

const Home: React.FC = () => {
    const [tools, setTools] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        fetchTools().then(data => setTools(data));
    }, []);

    const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <SearchBar onSearch={setSearchQuery} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredTools.map(tool => (
                    <Card
                        key={tool.id}
                        photo={tool.photo}
                        name={tool.name}
                        description={tool.description}
                        tags={tool.tags.split(',')}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;