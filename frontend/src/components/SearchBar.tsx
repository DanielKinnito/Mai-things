import React from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search tools..."
            onChange={handleSearch}
            className="search-bar"
        />
    );
};

export default SearchBar;