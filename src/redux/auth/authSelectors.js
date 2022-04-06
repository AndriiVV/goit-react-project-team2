export const getIsAuth = state => Boolean(state.auth.token);

// export const getIsAuth = state => false;

export const getToken = state => state.accessToken;
