const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_JOKE":
            state.items = [...state.items, action.item];
            return {...state}
        default:
            return state;
    }
};

export default reducer;
