export const GET_COLLECTION = "GET_COLLECTION";
export const ADD_CARDS = "ADD_CARDS";
export const DELETE_CARD = "DELETE_CARD";

export type Pack = {
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

export function addCards(cards: [card1: object, card2: object, card3: object, card4: object, card5: object]) {
    return {
        type: ADD_CARDS,
        card1: cards[0],
        card2: cards[1],
        card3: cards[2],
        card4: cards[3],
        card5: cards[4],
    }
}

export function deleteCard(card: object) {
    return {
        type: DELETE_CARD,
        card
    }
}