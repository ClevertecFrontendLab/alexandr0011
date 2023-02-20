import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Layout } from './components/layout/layout';
import { LayoutMainPage } from './components/layout-main-page/layout-main-page';
import { BooksPage } from './pages/books-page/books-page';
import { TermsPage } from './pages/terms-page/terms-page';
import { BookPage } from './pages/book-page/book-page';
import { TERMS_PAGE_NAME, AGREEMENT_PAGE_NAME } from './constants/constants';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route element={<LayoutMainPage />}>
              <Route path='/' element={<Navigate to='books/all' />} />
              <Route path='books/:category' element={<BooksPage />} />
              <Route path='terms' element={<TermsPage pageName={TERMS_PAGE_NAME} />} />
              <Route path='agreements' element={<TermsPage pageName={AGREEMENT_PAGE_NAME} />} />
            </Route>
            <Route path='books/:category/:id' element={<BookPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
