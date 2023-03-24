import {
    GET_COLLECTION,
    ADD_CARDS,
    DELETE_CARD
} from "../actions/collection";


export default function collectionReducer(state = { collection: [] }, action: { type: string; collection: []; card1: object; card2: object; card3: object; card4: object; card5: object; card: object }) {
    switch (action.type) {
        case GET_COLLECTION:
            return {
                ...state,
                collection: action.collection
            }
        case ADD_CARDS:
            return {
                ...state,
                collection: [...state.collection,
                action.card1,
                action.card2,
                action.card3,
                action.card4,
                action.card5]
            }
        case DELETE_CARD:
            const cardIndex = state.collection.findIndex((c: any) => c === action.card);
            if (cardIndex >= 0) {
                const updatedCollection = [...state.collection];
                updatedCollection.splice(cardIndex, 1);
                return {
                    ...state,
                    collection: updatedCollection
                }
            }
            return state;
        default:
            return state;
    }
}