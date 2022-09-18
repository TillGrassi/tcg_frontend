import {
    SET_AUTHED_USER,
    REMOVE_AUTHED_USER,
    ADD_COIN,
    REMOVE_COIN,
    ADD_BOOSTER,
    REMOVE_BOOSTER
} from "../actions/user";

export default function userReducer(state = {authedUser: "Testuser", coins: 0, booster: 0}, action: { type: string; authedUser: string; coins: number; booster: number; }) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return {
                ...state,
                authedUser: action.authedUser,
                coins: action.coins,
                booster: action.booster
            };
        case REMOVE_AUTHED_USER:
            return {
                ...state,
                authedUser: null,
                coins: 0,
                booster: 0,
            };
        case ADD_COIN:
            return {
                ...state,
                coins: state.coins + 10,
            };
        case REMOVE_COIN:
            return {
                ...state,
                coins: state.coins - 10,
            };
        case ADD_BOOSTER:
            return {
                ...state,
                booster: state.booster + 1,
            };
        case REMOVE_BOOSTER:
            return {
                ...state,
                booster: state.booster - 1,
            }
        default:
            return state;
    }
}