import React, { useState } from 'react';
import { useHistory } from "react-router-dom"
import './searchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform search functionality with the query variable
        if (!query) {
            return
        }
        setQuery('')
        history.push(`/search/${query}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </form>
    );
}

export default SearchBar;
