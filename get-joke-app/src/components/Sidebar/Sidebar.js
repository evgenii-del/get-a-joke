import React from "react";

import "./Sidebar.scss";

const Sidebar = props => {
    const {sidebarRef} = props;

    return (
        <div className="sidebar active" ref={sidebarRef}>
            <div className="sidebar__inner">
                <h2 className="sidebar__title">Favourite</h2>
                <div className="sidebar__content">
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
