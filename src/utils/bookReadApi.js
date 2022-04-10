import axios from 'axios';
import { registry } from 'chart.js';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';

axios.defaults.baseURL = 'https://bookread-backend.goit.global';

export const loginUserApi = userData => {
  return axios.post('/auth/login', userData).then(({ data }) => {
    axios.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;

    return {
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
      sid: data.sid,
      name: data.userData.name,
      email: data.userData.email,
      id: data.userData.id,
      goingToRead: data.userData.goingToRead,
      currentlyReading: data.userData.currentlyReading,
      finishedReading: data.userData.finishedReading,
    };
  });
};

export const registerUserApi = userData => {
  return axios
    .post('/auth/register', userData)
    .then(({ data }) => {
      return {
        email: data.email,
        id: data.id,
      };
    });
};

// export const refreshTokenApi = (sid, refreshToken) => {
//   return axios
//     .post('/auth/refresh', {
//       sid,
//     })
//     .then(({ data }) => {
//       axios.defaults.headers.common.Authorization = `Bearer ${data.newAccessToken}`;
//       return {
//         accessToken: data.newAccessToken,
//         refreshToken: data.newRefreshToken,
//         sid: data.newSid,
//       };
//     });
// };

export const addNewBookApi = book => {
  return axios.post('/book', book).then(({ data }) => {
    console.log(data.newBook);
    return {
      title: data.newBook.title,
      author: data.newBook.author,
      publishYear: data.newBook.publishYear,
      pagesTotal: data.newBook.pagesTotal,
      pagesFinished: data.newBook.pagesFinished, // or 0 as initial value for a new book in the library
      _id: data.newBook._id,
    };
  });
};

export const addBookReviewApi = (reviewData, _id) => {
  // reviewData is an object:
  // {
  //  "rating",
  //  "feedback",
  // }
  //
  // _id - this is "book's id"
  axios.defaults.params = {
    bookId: _id,
  };
  return axios.post('/book/review', reviewData).then(({ data }) => ({
    title: data.title,
    author: data.author,
    publishYear: data.publishYear,
    totalPages: data.totalPages,
    pagesFinished: data.pagesFinished,
    rating: data.rating,
    feedback: data.feedback,
    _id: data._id,
  }));
};

// export const addBookToTrainingApi = addBook => {
//   return axios
//     .post('/user/books', addBook)
//     .then(({ data }) => ({ ...addBook, id: data.id }))
//     .catch(err => err);
// };

// export const getTrainingListApi = () => {
//   return axios
//     .get('/user/books')
//     .then(({ data }) => data)
//     .catch(err => err);
// };

// export const deleteTrainingBookApi = id => {
//   return axios
//     .delete(`/user/books/${id}`)
//     .then(({ data }) => data.id)
//     .catch(err => err);
// };

export const startTrainingApi = trainingData => {
  return axios
    .post('/planning', trainingData)
    .then(({ data }) => {
      return {
        startDate: data.startDate,
        endDate: data.endDate,
        books: data.books,
        duration: data.duration,
        pagesPerDay: data.pagesPerDay,
        stats: data.stats,
        _id: data._id,
      };
    })
    .catch(err => err);
};

export const logOutApi = accessToken => {
  return axios
    .post('/auth/logout', accessToken)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      throw err;
    });
};

export const getUserDataApi = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    'accessToken'
  )}`;
  return axios.get('/user/books').then(({ data }) => {
    // console.log('/user/books ', data);
    return {
      name: data.name,
      email: data.email,
      goingToRead: data.goingToRead,
      currentlyReading: data.currentlyReading,
      finishedReading: data.finishedReading,
    };
  });
};

export const getTrainingDataApi = accessToken => {
  axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  return axios.get('/planning').then(({ data }) => {
    return {
      books: data.planning.books,
      startDate: data.planning.startDate,
      endDate: data.planning.endDate,
      duration: data.planning.duration,
      pagesPerDay: data.planning.pagesPerDay,
      stats: data.planning.stats,
    };
  });
};
