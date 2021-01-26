let store = {
    items: [],
    favourites: localStorage.getItem('favourites') ? JSON.parse(localStorage.getItem('favourites')) : []
}

export default store;
