export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";
export const ADD_COIN = "ADD_COIN";
export const REMOVE_COIN = "REMOVE_COIN";
export const ADD_BOOSTER = "ADD_BOOSTER";
export const REMOVE_BOOSTER = "REMOVE_BOOSTER";

type Init = {
  authedUser: string,
  coins: number,
  booster: number
}

export function setAuthedUser({ authedUser, coins, booster }: Init) {
  return {
    type: SET_AUTHED_USER,
    authedUser,
    coins,
    booster
  };
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER,
  };
}

export function addCoin(amount: number) {
  return {
    type: ADD_COIN,
    amount
  }
}

export function removeCoin() {
  return {
    type: REMOVE_COIN,
  }
}

export function addBooster() {
  return {
    type: ADD_BOOSTER,
  }
}


export function removeBooster() {
  return {
    type: REMOVE_BOOSTER,
  }
}