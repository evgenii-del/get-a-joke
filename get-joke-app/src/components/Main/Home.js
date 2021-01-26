import React, {useContext, useRef} from "react";

import MainControl from "./MainControl/MainControl";
import MainTitle from "./MainTitle/MainTitle";
import Card from "./Card/Card";
import {Context} from "../../context";
import "./Home.scss";


const Home = props => {
    const {state} = useContext(Context);
    const {sidebarRef, onAddJokeToFavourite} = props;
    const burgerRef = useRef();
    const mainRef = useRef();

    const handleBurger = () => {
        burgerRef.current.className.includes("burger_active") ? burgerRef.current.className = "burger" : burgerRef.current.className = "burger burger_active";
        mainRef.current.className.includes("main-dark") ? mainRef.current.className = "main" : mainRef.current.className = "main main-dark";
        sidebarRef.current.className.includes("sidebar_active") ? sidebarRef.current.className = "sidebar" : sidebarRef.current.className = "sidebar sidebar_active";
    }

    const checkIsFavourite = jokeId => {
        return !!state.favourites.filter(item => item.id === jokeId).length;
    }

    return (
        <div className="main" ref={mainRef}>
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
                })) : <h2 className="not-found">Jokes not found</h2>
            }
        </div>
    );
}

export default Home;
