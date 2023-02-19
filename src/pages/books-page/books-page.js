import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavigationBar } from '../../components/navigation-bar/navigation-bar';
import { CardBook } from '../../components/card-book/card-book';
import { VIEW_TYPE_TILE } from '../../constants/constants';
import { getBooks } from '../../redux/reducers/books-reducer';
import styles from './books-page.module.scss';

export function BooksPage() {
  const [viewType, setViewType] = useState(VIEW_TYPE_TILE);
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  function onChangeViewHandler(view) {
    setViewType(view);
  }

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const cards = books.map((book) => (
    <CardBook
      key={book.id}
      viewType={viewType}
      id={book.id}
      img={book.image}
      rating={book.rating}
      title={book.title}
      authors={book.authors}
      year={book.issueYear}
    />
  ));

  return (
    <section className={styles.books_page_wrapper}>
      <NavigationBar viewType={viewType} onChangeViewHandler={(view) => onChangeViewHandler(view)} />
      <section className={viewType === VIEW_TYPE_TILE ? styles.content_wrapper : styles.content_wrapper_list}>
        {cards}
      </section>
    </section>
  );
}
