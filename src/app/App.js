import React from 'react';
import './App.css';
import Sidebar from '../features/sidebar';
import RedditContent from '../features/redditContent';

const App = () => {
    return (
        <div className='reactContainer'>
            <header>
                <h1>Reddit - The Final Frontier</h1>
            </header>
            <main>
                <Sidebar></Sidebar>
                <RedditContent></RedditContent>
            </main>
            <footer>
                <h4>Reddit - The Final Frontier</h4>
                <hr />
                <p>An astronomy themed Reddit app, built in React by Ed Hampton, 2022.</p>
            </footer>            
        </div>
    );
};

export default App;