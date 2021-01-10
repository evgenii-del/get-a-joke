import React, {useRef} from "react";

import "./MainTitle.scss";


const MainTitle = props => {
    const {mainRef, sidebarRef} = props;
    const burgerRef = useRef();

    const handleBurger = () => {
        burgerRef.current.className.includes("burger_active") ? burgerRef.current.className = "burger" : burgerRef.current.className = "burger burger_active";
        mainRef.current.className.includes("main-menu-dark") ? mainRef.current.className = "main" : mainRef.current.className = "main main-menu-dark";
        sidebarRef.current.className.includes("active") ? sidebarRef.current.className = "sidebar" : sidebarRef.current.className = "sidebar active";
    }

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
