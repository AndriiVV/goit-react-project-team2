export const getIsAuth = state => Boolean(state.auth.accessToken);

// export const getIsAuth = state => false;

export const getToken = state => state.auth.accessToken;

export const getBooks = state => state.auth.user.goingToRead;