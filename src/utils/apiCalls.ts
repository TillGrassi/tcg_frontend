import { Pack } from "../actions/collection";

type PackArray = [
  card1: object,
  card2: object,
  card3: object,
  card4: object,
  card5: object
];

//Login
export const fetchCollection = async (username: string) => {
  const response = await fetch(`http://localhost:8080/collection:${username}`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
  const collection = await response.json();
  return collection;
};

export const loginUser = async (username: string, password: string) => {
  const response = await fetch('http://localhost:8080/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })

  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

export const createUser = async (username: string, password: string) => {
  const response = await fetch('http://localhost:8080/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  const token = await response.json();
  return token;
};

//Booster
export const getBooster = async () => {
  const response = await fetch('http://localhost:8080/booster', {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  const booster = await response.json();
  return booster;
};

export const addCardsToCollection = async (user: string | null, boostercards: PackArray): Promise<Pack> => {
  let [card1, card2, card3, card4, card5] = boostercards;
  const response = await fetch('http://localhost:8080/addCards', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({
      username: user,
      card1,
      card2,
      card3,
      card4,
      card5,
    })
  });

  const cards = await response.json();
  return cards;
};

//User
export const removeBoosterServer = async (username: string) => {
  const response = await fetch('http://localhost:8080/users/removeBooster', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ username })
  });

  const result = await response.json();
  return result;
}

export const addBoosterServer = async (username: string) => {
  const response = await fetch('http://localhost:8080/users/addBooster', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ username })
  });

  const result = await response.json();
  return result;
}

export const removeCoinServer = async (username: string) => {
  const response = await fetch('http://localhost:8080/users/removeCoin', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ username })
  });

  const result = await response.json();
  return result;
}

export const addCoinServer = async (amount: number, username: string) => {
  const response = await fetch('http://localhost:8080/users/addCoin', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ amount, username })
  });

  const result = await response.json();
  return result;
}

export const deleteCardServer = async (username: string, card: number) => {
  const response = await fetch('http://localhost:8080/deleteCard', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ username, card })
  });

  const result = await response.json();
  return result;
}
