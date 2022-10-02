import React from "react";
import BestSeller from '../Components/BestSeller'
import Slider from '../Components/Slider'
import BonelessCuts from '../Components/BonelessCuts'
import Breakfast from "../Components/Breakfast";
import Categories from "../Components/Categories";
import Explore from "../Components/Explore";

const Home = () => {
    return (
        <>
            <Slider/>
            <Categories/>
            <BestSeller />
            <BonelessCuts/>
            <Explore/>
            <Breakfast/>
        </>
    )
}

export default Home