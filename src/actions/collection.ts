export const GET_COLLECTION = "GET_COLLECTION";
export const ADD_CARDS = "ADD_CARDS";

type Pack = {
    card1: object,
    card2: object,
    card3: object,
    card4: object,
    card5: object
}

export function getCollection(collection: object) {
    return {
        type: GET_COLLECTION,
        collection,
    }
}

export function addCards({card1, card2, card3, card4, card5}: Pack) {
    return {
        type: ADD_CARDS,
        card1,
        card2,
        card3,
        card4,
        card5,
    }
}