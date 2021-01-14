import React, {useContext} from "react";

import CardFavourite from "./CardFavourite/CardFavourite";
import {Context} from "../../context";
import "./Sidebar.scss";


const Sidebar = props => {
    const {state} = useContext(Context);
    const {sidebarRef, onAddJokeToFavourite} = props;

    return (
        <div className="sidebar" ref={sidebarRef}>
            <div className="sidebar__inner">
                <h2 className="sidebar__title">Favourite</h2>
                <div className="sidebar__content">
                    {
                        state.favourites.map((item, index) => <CardFavourite item={item} key={index}
                                                                             addJokeToFavourite={id => onAddJokeToFavourite(id)}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
