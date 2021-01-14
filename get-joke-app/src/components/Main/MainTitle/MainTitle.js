import React from "react";

import "./MainTitle.scss";


const MainTitle = props => {
    const {burgerRef, handleBurger} = props;

    return (
        <div className="main__title">
            <p>msi 2020</p>
            <span className="btn-menu" onClick={handleBurger}>
                <div className="burger" ref={burgerRef}>
                    <span className="burger_line burger_line_first"/>
                    <span className="burger_line burger_line_second"/>
                </div>
                <p>Favourite</p>
            </span>
        </div>
    );
}

export default MainTitle;
