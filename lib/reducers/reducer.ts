interface IState {
    status: any;
};

const initialState: IState = { 
    status: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STATUS_FETCHED":
            return {...state, status: action.payload};
        case "SIGNUP":
            console.log("hiiii")
            return {...state, status: action.payload};
        default:
            return state;
    }
};

export default reducer;