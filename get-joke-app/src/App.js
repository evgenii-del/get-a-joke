import React, {useReducer, useRef, useCallback} from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./components/Main/Home";
import reducer from "./reducer";
import {Context} from "./context";
import store from "./state";


const App = () => {
    const [state, dispatch] = useReducer(reducer, store);
    const sidebarRef = useRef();
    const wrapperRef = useRef();

    const onAddJokeToFavourite = useCallback(jokeId => {
        dispatch({
            type: "ADD_JOKE_TO_FAVOURITE",
            payload: jokeId
        })
    }, [])

    return (
        <Context.Provider value={{state, dispatch}}>
            <div className="wrapper" ref={wrapperRef}>
                <Home sidebarRef={sidebarRef} wrapperRef={wrapperRef} onAddJokeToFavourite={onAddJokeToFavourite}/>
                <Sidebar sidebarRef={sidebarRef} onAddJokeToFavourite={onAddJokeToFavourite}/>
            </div>
        </Context.Provider>
    );
}

export default App;
