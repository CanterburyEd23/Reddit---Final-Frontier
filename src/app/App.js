import React from 'react';
import './App.css';
import Header from '../features/Header';
import Sidebar from '../features/sidebar';
import RedditContent from '../features/redditContent';

const App = () => {
    return (
        <div className='reactContainer'>
            <Header></Header>
            <main>                
                <RedditContent></RedditContent>
                <Sidebar></Sidebar>
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