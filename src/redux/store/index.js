import { configureStore } from '@reduxjs/toolkit';

import { bookReducer } from '../reducers/book-reducer';
import { booksReducer } from '../reducers/books-reducer';
import { categoriesReducer } from '../reducers/categories-reducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    book: bookReducer,
  },
});
