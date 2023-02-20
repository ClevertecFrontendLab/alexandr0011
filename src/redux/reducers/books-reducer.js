import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { service } from '../../services/service';

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const getBooks = createAsyncThunk('books/getBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await service.get('books');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    closeBooksError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state) => {
        state.error = true;
        state.loading = false;
      })
  },
});

export const { closeBooksError } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
