import React, {useContext, useRef} from "react";

import MainControl from "./MainControl/MainControl";
import MainTitle from "./MainTitle/MainTitle";
import Card from "./Card/Card";
import {Context} from "../../context";
import "./Home.scss";


const Home = props => {
    const {state} = useContext(Context);
    const {sidebarRef, wrapperRef, onAddJokeToFavourite} = props;
    const burgerRef = useRef();

    const handleBurger = () => {
        burgerRef.current.className.includes("burger_active") ? burgerRef.current.className = "burger" : burgerRef.current.className = "burger burger_active";
        wrapperRef.current.className.includes("wrapper-dark") ? wrapperRef.current.className = "wrapper" : wrapperRef.current.className = "wrapper wrapper-dark";
        sidebarRef.current.className.includes("sidebar_active") ? sidebarRef.current.className = "sidebar" : sidebarRef.current.className = "sidebar sidebar_active";
    }

    const checkIsFavourite = jokeId => {
        return !!state.favourites.filter(item => item.id === jokeId).length;
    }

    return (
        <div className="main">
            <MainTitle burgerRef={burgerRef} handleBurger={handleBurger}/>
            <div className="greeting">
                <p>Hey!</p>
                <p>Let's try to find a joke for you</p>
            </div>
            <MainControl/>
            {
                state.items.length ? (state.items.map((item, index) => {
                    const isFavourite = checkIsFavourite(item.id);
                    return <Card item={item} key={index} isFavourite={isFavourite}
                                 addJokeToFavourite={id => onAddJokeToFavourite(id)}/>
                })) : <p className="not-found">Jokes not found</p>
            }
        </div>
    );
}

export default Home;
