import React, { useState } from 'react';
import { ReactComponent as Search } from '../assets/icon-search.svg';
import './SearchBar.css';

const SearchBar = ({ sendRequest, onSearchUser, error, clearError }) => {
    const [term, setTerm] = useState('');

    const onFormSubmit = async e => {
        e.preventDefault();

        try {
            clearError();

            const responseData = await sendRequest(
                `https://api.github.com/users/${term}`
            );

            onSearchUser(responseData);
        } catch (err) {}
    };

    return (
        <form className="search-bar" onSubmit={onFormSubmit}>
            <div className="search-bar__content">
                <Search />
                <div className="search-bar__control">
                    <label
                        htmlFor="searchInput"
                        className="search-bar__label visually-hidden"
                    >
                        Search GitHub Username
                    </label>
                    <input
                        type="text"
                        id="searchInput"
                        className="search-bar__input"
                        name="searchInput"
                        placeholder="Search GitHub username…"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                {error && <span className="search-bar__error">No results</span>}
                <button type="submit" className="search-bar__button">
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
