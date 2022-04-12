export const getIsAuth = state => Boolean(state.auth.accessToken);

// export const getIsAuth = state => false;

export const getToken = state => state.auth.accessToken;

export const getIsLoading = state => state.auth.isLoading;

export const getAuthError = state => state.auth.error;

