import React from "react";

import "./MainTitle.scss";


function MainTitle() {
    return (
        <div className="main__title">
            <p>msi 2020</p>
            <span id="burgern-button" className="main__burger">
                <div className="burger">
                    <span className="burger__line burger__line-first"/>
                    <span className="burger__line burger__line-second"/>
                </div>
                <p>Favourite</p>
            </span>
        </div>
    );
}

export default MainTitle;
