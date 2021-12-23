import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Post/>
        </div>
    );
};

export default Home;