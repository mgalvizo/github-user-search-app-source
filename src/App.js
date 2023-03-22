import React, { useContext, useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserDetail from './components/UserDetail';
import ThemeContext from './contexts/themeContext';
import useHttp from './hooks/useHttp';

const App = () => {
    const { isLoading, error, clearError, sendRequest } = useHttp();
    const { changeTheme, isLightTheme } = useContext(ThemeContext);
    const [fetchedUser, setFetchedUser] = useState(null);

    const onSearchUser = user => {
        setFetchedUser(user);
    };

    useEffect(() => {
        const fetchUser = async defaultSearchTerm => {
            try {
                const responseData = await sendRequest(
                    `https://api.github.com/users/${defaultSearchTerm}`
                );

                setFetchedUser(responseData);
            } catch (err) {
                throw err;
            }
        };

        fetchUser('octocat');
    }, [sendRequest]);

    return (
        <div className="app">
            <div className="app__content">
                <Header changeTheme={changeTheme} isLightTheme={isLightTheme} />
                <main>
                    <SearchBar
                        sendRequest={sendRequest}
                        onSearchUser={onSearchUser}
                        error={error}
                        clearError={clearError}
                    />
                    <UserDetail
                        user={fetchedUser}
                        error={error}
                        isLoading={isLoading}
                    />
                </main>
            </div>
        </div>
    );
};

export default App;
