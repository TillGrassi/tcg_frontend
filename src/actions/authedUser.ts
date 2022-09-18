export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const REMOVE_AUTHED_USER = "REMOVE_AUTHED_USER";

export function setAuthedUser(username: string) {
  return {
    type: SET_AUTHED_USER,
    username,
  };
}

export function removeAuthedUser() {
  return {
    type: REMOVE_AUTHED_USER,
    id: null,
  };
}
