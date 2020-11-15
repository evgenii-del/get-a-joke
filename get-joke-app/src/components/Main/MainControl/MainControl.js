import React, {useState} from "react";

import "./MainControl.scss";


function MainControl() {
    const [categoriesVisibility, setCategoriesVisibility] = useState(false);
    const [searchVisibility, setSearchVisibility] = useState(false);

    const choseType = (type) => {
        if (type === "categories") {
            setCategoriesVisibility(true);
            setSearchVisibility(false);
        } else if (type === "search") {
            setSearchVisibility(true);
            setCategoriesVisibility(false);
        } else {
            setCategoriesVisibility(false);
            setSearchVisibility(false);
        }
    }

    return (
        <div className="control">

            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" value="random" onChange={(event) => {
                    choseType(event.target.value);
                }} id="rb1" defaultChecked/>
                <label htmlFor="rb1">Random</label>
            </div>

            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" value="categories"
                       onChange={(event) => {
                           choseType(event.target.value);
                       }} id="rb2"/>
                <label htmlFor="rb2">From categories</label>
                {categoriesVisibility &&
                <div className="categories">
                    <div className="categories__item">
                        <input id="radio-1" type="radio" name="category-button" value="animal" defaultChecked/>
                        <label htmlFor="radio-1">Animal</label>
                    </div>
                    <div className="categories__item">
                        <input id="radio-2" type="radio" name="category-button" value="career"/>
                        <label htmlFor="radio-2">Career</label>
                    </div>
                    <div className="categories__item">
                        <input id="radio-3" type="radio" name="category-button" value="celebrity"/>
                        <label htmlFor="radio-3">Celebrity</label>
                    </div>
                    <div className="categories__item">
                        <input id="radio-4" type="radio" name="category-button" value="dev"/>
                        <label htmlFor="radio-4">Dev</label>
                    </div>
                </div>}

            </div>

            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" value="search" onChange={(event) => {
                    choseType(event.target.value);
                }} id="rb3"/>
                <label htmlFor="rb3">Search</label>
                {searchVisibility &&
                <div className="control__search">
                    <input type="search" id="search" placeholder="Free text search..."/>
                </div>}


            </div>

            <div className="control__btn">
                <a>Get a joke</a>
            </div>


        </div>
    );
}

export default MainControl;
