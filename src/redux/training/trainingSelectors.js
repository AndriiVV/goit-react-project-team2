export const getBooksTraining = state => state.training.books;

export const getIsTraining = state => !!state.training._id;
// export const getIsTrainingGo = state => state.isTrainingGo;
export const getStats = state => state.training.stats;
// export const checkRender = state => state._id;
export const getTrainingError = state => state.training.error;
