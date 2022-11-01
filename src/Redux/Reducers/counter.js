import { FAVOUTITE_LIST } from "../Types/Counter";

const initialState = {
    favorite: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FAVOUTITE_LIST:
            return {...state, favorite: action.payload}
        default:
            return state
    }
}

export default reducer