import { ADD_TO_WISH, REMOVE_FROM_WISH } from '../actions/types';

const initialState = {
    items: [],

};

export default function (state = initialState, action) {

    switch (action.type) {
        case ADD_TO_WISH:
            return {
                ...state,
                items: action.payload.wishItems
            }
        case REMOVE_FROM_WISH:
            return {
                ...state,
                items: action.payload.wishItems
            }
        default:
            return state;
    }
}