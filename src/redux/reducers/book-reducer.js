import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { service } from '../../services/service';

const initialState = {
  book: {
    images: [],
    categories: [],
    comments: [],
  },
  loading: false,
  error: null,
};

export const getBook = createAsyncThunk('book/getBook', async (bookId, { rejectWithValue }) => {
  try {
    const response = await service.get(`books/${bookId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    clearBook: (state) => {
      state.book = {
        images: [],
        categories: [],
        comments: [],
      }
    },
    closeBookError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.loading = false;
        state.book = action.payload;
      })
      .addCase(getBook.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

export const { closeBookError, clearBook } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;
