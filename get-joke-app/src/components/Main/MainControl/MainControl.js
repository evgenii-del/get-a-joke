import React from "react";

import "./MainControl.scss";


function MainControl() {
    return (
        <div className="control">


            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" id="rb1" defaultChecked/>
                <label htmlFor="rb1">Random</label>
            </div>


            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" id="rb2"/>
                <label htmlFor="rb2">From categories</label>
                <div className="categories">
                    <div className="form_radio_btn categories__item">
                        <input id="radio-1" type="radio" name="category-button" value="animal" defaultChecked/>
                        <label htmlFor="radio-1">Animal</label>
                    </div>
                    <div className="form_radio_btn categories__item">
                        <input id="radio-2" type="radio" name="category-button" value="career"/>
                        <label htmlFor="radio-2">Career</label>
                    </div>
                    <div className="form_radio_btn categories__item">
                        <input id="radio-3" type="radio" name="category-button" value="celebrity"/>
                        <label htmlFor="radio-3">Celebrity</label>
                    </div>
                    <div className="form_radio_btn categories__item">
                        <input id="radio-4" type="radio" name="category-button" value="dev"/>
                        <label htmlFor="radio-4">Dev</label>
                    </div>
                </div>
            </div>


            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" id="rb3"/>
                <label htmlFor="rb3">Search</label>
                <div className="control__search">
                    <input type="search" id="search" placeholder="Free text search..."/>
                </div>
            </div>


            <div className="control__btn">
                <a onClick="addJoke()">Get a joke</a>
            </div>


        </div>
    );
}

export default MainControl;
