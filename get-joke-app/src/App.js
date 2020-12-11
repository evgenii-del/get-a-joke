import React, {useReducer} from "react";

import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import {Context} from "./context";
import reducer from "./reducer";
import store from "./state";


const App = () => {
    const [state, dispatch] = useReducer(reducer, store);

    return (
        <Context.Provider value={{state, dispatch}}>
            <div className="wrapper">
                <Main/>
                <Sidebar/>
            </div>
        </Context.Provider>
    );
}

export default App;
