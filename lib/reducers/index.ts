import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from 'react-redux'
import display from "./reducer"

const combinedReducers = combineReducers({
    display
})  

export default function reducer(state, action) {
    switch(action.type) {
        case HYDRATE:
            const nextState = {
            ...state,
            ...action.payload,
            }
            if (state.display) nextState.display = state.display // Preserve state during client side navigations
            return nextState
        default: 
            return combinedReducers(state, action);
    }
}

export type RootState = ReturnType<typeof reducer>
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector