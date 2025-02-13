import React from 'react';
import Banner from './Banner/Banner';
import Category from '../Category/Category';
import PopularMenu from '../../Components/PopularMenu/PopularMenu';
import Fetured from './Fetured/Fetured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Fetured></Fetured>
        </div>
    );
};

export default Home;