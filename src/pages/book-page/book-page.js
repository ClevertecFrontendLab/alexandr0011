import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BreadCrumb } from '../../components/bread-crumb/bread-crumb';
import { BooksRating } from '../../components/books-rating/books-rating';
import { AboutBook } from '../../components/about-book/about-book';
import { BookReviews } from '../../components/book-reviews/book-reviews';
import { BookPreview } from '../../components/book-preview/book-preview';
import { ErrorComponent } from '../../components/error-component/error-component';
import { getBook, clearBook } from '../../redux/reducers/book-reducer';
import styles from './book-page.module.scss';

export function BookPage() {
  const {
    error,
    book: {
      ISBN,
      producer,
      issueYear,
      pages,
      cover,
      format,
      weight,
      publish,
      id,
      rating,
      categories,
      title,
      images,
      description,
      author,
      comments,
    },
  } = useSelector((state) => state.book);
  const path = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBook(path.id));
    return () => {
      dispatch(clearBook());
    };
  }, [dispatch, path.id]);

  return (
    <main>
      {error ? (
        <ErrorComponent />
      ) : (
        <>
          <BreadCrumb categoryPath={path.category} categories={categories[0]} title={title} />
          <div className={styles.wrapper}>
            <BookPreview description={description} author={author} title={title} img={images} />
            <section className={styles.rating_wrapper}>
              <div className={styles.rating_book_placeholder}>Рейтинг</div>
              <div className={styles.rating_container}>
                <BooksRating id={id} rating={rating} />
                {rating ? <span>{rating}</span> : <p>ещё нет оценок</p>}
              </div>
            </section>
            <AboutBook
              ISBN={ISBN}
              producer={producer}
              issueYear={issueYear}
              pages={pages}
              cover={cover}
              format={format}
              weight={weight}
              publish={publish}
              categories={categories}
            />
            <BookReviews comments={comments} />
          </div>
        </>
      )}
    </main>
  );
}
