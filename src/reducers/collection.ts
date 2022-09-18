import {
    GET_COLLECTION,
    ADD_CARDS
} from "../actions/collection";

const testcollection = [
    {id: 43, name: "Herbert", description: "Test", rarity: "rare"},
    {id: 30, name: "Franz", description: "Test", rarity: "uncommon"},
    {id: 1, name: "Klaus", description: "Test", rarity: "common"},
    {id: 43, name: "Herbert", description: "Test", rarity: "rare"},
    {id: 18, name: "Franz", description: "Test", rarity: "uncommon"},
    {id: 3, name: "Klaus", description: "Test", rarity: "common"},
    {id: 50, name: "Herbert", description: "Test", rarity: "rare"},
    {id: 28, name: "Franz", description: "Test", rarity: "uncommon"},
    {id: 3, name: "Klaus", description: "Test", rarity: "common"},
    {id: 39, name: "Herbert", description: "Test", rarity: "rare"},
    {id: 27, name: "Franz", description: "Test", rarity: "uncommon"},
    {id: 3, name: "Klaus", description: "Test", rarity: "common"},
];

export default function collectionReducer(state={collection:testcollection}, action: { type: string; collection: []; card1: object; card2: object; card3: object; card4: object; card5: object; }) {
    switch(action.type) {
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
        default:
            return state;
    }
}