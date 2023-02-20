import { configureStore } from '@reduxjs/toolkit';
import { categoriesReducer } from '../reducers/categories-reducer';
import { booksReducer } from '../reducers/books-reducer';
import { bookReducer } from '../reducers/book-reducer';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    books: booksReducer,
    book: bookReducer,
  },
});
