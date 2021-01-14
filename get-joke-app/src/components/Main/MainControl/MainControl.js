import React, {useContext, useState} from "react";
import axios from "axios";

import {Context} from "../../../context";
import "./MainControl.scss";


const getRandomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const MainControl = () => {
    const {dispatch} = useContext(Context);
    const [search, setSearch] = useState("");
    const [selectedType, setSelectedType] = useState("random");
    const [selectedCategory, setSelectedCategory] = useState("animal");

    const handleChangeType = type => {
        setSelectedType(type);
    }

    const handleChangeSearch = (value) => {
        setSearch(value);
    }

    const handleChangeCategory = category => {
        setSelectedCategory(category);
    }

    const setJoke = joke => {
        dispatch({
            type: "ADD_JOKE",
            item: joke
        })
    }

    const fetchJoke = () => {
        let substr;

        if (selectedType === "categories") {
            substr = `random?category=${selectedCategory}`;
        } else if (selectedType === "search") {
            substr = `search?query=${search}`;
        } else {
            substr = "random";
        }

        axios.get(`https://api.chucknorris.io/jokes/${substr}`).then(response => {
            if (response.data.total) {
                const index = getRandomInteger(0, response.data.total);
                setJoke(response.data.result[index]);
            } else {
                setJoke(response.data);
            }
        });
    }

    return (
        <div className="control">
            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" value="random"
                       onChange={() => handleChangeType("random")} id="rb1" checked={selectedType === "random"}/>
                <label htmlFor="rb1">Random</label>
            </div>
            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" value="categories"
                       onChange={() => handleChangeType("categories")} id="rb2"
                       checked={selectedType === "categories"}/>
                <label htmlFor="rb2">From categories</label>
                {selectedType === "categories" &&
                <div className="categories">
                    <div className="categories__item">
                        <input id="radio-1" type="radio" name="category-button" value="animal"
                               onChange={() => handleChangeCategory("animal")} checked={selectedCategory === "animal"}/>
                        <label htmlFor="radio-1">Animal</label>
                    </div>
                    <div className="categories__item">
                        <input id="radio-2" type="radio" name="category-button" value="career"
                               onChange={() => handleChangeCategory("career")} checked={selectedCategory === "career"}/>
                        <label htmlFor="radio-2">Career</label>
                    </div>
                    <div className="categories__item">
                        <input id="radio-3" type="radio" name="category-button" value="celebrity"
                               onChange={() => handleChangeCategory("celebrity")}
                               checked={selectedCategory === "celebrity"}/>
                        <label htmlFor="radio-3">Celebrity</label>
                    </div>
                    <div className="categories__item">
                        <input id="radio-4" type="radio" name="category-button" value="dev"
                               onChange={() => handleChangeCategory("dev")} checked={selectedCategory === "dev"}/>
                        <label htmlFor="radio-4">Dev</label>
                    </div>
                </div>}
            </div>
            <div className="control__item">
                <input className="control__type" type="radio" name="choice-button" value="search"
                       onChange={() => handleChangeType("search")} id="rb3" checked={selectedType === "search"}/>
                <label htmlFor="rb3">Search</label>

                {selectedType === "search" &&
                <div className="control__search">
                    <input type="search" id="search" placeholder="Free text search..." value={search}
                           onChange={({target}) => handleChangeSearch(target.value)}/>
                </div>}
            </div>
            <div className="control__btn">
                <button onClick={fetchJoke}>Get a joke</button>
            </div>
        </div>
    );
}

export default MainControl;
