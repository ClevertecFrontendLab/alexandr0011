import { Link } from 'react-router-dom';
import { BooksRating } from '../../books-rating/books-rating';
import defaultImg from '../../../resources/img/default_card_img.png';
import styles from './card-item.module.scss';

export function CardItem({ id, img, rating, title, authors, year }) {
  function getAuthorString(authors, year) {
    if (authors[1]) {
      return `${authors[0]}, ${authors[1]}, ${year}`;
    }
    return `${authors[0]}, ${year}`;
  }
  return (
    <Link to={`books/../../all/${id}`}>
      <div className={styles.card_wrapper}>
        <div className={styles.book_img}>
          <img src={img ? `https://strapi.cleverland.by${img.url}` : defaultImg} alt='img' />
        </div>
        <div className={styles.book_rating}>{rating ? <BooksRating id={id} rating={rating} /> : 'ещё нет оценок'}</div>
        <div className={styles.book_title}>{title.length < 40 ? title : `${title.slice(0, 40)}...`}</div>
        <div className={styles.book_author}>
          {getAuthorString(authors, year)}
        </div>
      </div>
      <div className={styles.btn_wrapper}>
        <button className={styles.card_btn} type='button'>
          Забронировать
        </button>
      </div>
    </Link>
  );
}
