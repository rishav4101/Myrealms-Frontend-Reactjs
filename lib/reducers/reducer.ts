interface IState {
    status: any;
    user_resp: any;
};

const initialState: IState = { 
    status: {},
    user_resp: {},
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "STATUS_FETCHED":
            return {...state, status: action.payload};
        case "SIGNUP":
            console.log(action.payload);
            return {...state, user_resp: action.payload};
        default:
            return state;
    }
};

export default reducer;