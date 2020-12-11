import React, {useContext} from "react";

import MainTitle from "./MainTitle/MainTitle";
import MainControl from "./MainControl/MainControl";
import Card from "./Card/Card";
import {Context} from "../../context";

import "./Main.scss";


function Main() {
    const {state, dispatch} = useContext(Context);

    return (
        <div className="main">
            <MainTitle/>
            <div className="greeting">
                <p>Hey!</p>
                <p>Let's try to find a joke for you</p>
            </div>
            <MainControl/>
            <Card id={state.jokes[0].id} body={state.jokes[0].body} date={state.jokes[0].date}
                  genre={state.jokes[0].genre}/>
        </div>
    );
}

export default Main;
