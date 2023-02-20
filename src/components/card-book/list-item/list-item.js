import { Link } from 'react-router-dom';
import { BooksRating } from '../../books-rating/books-rating';
import styles from './list-item.module.scss';
import defaultListImg from '../../../resources/img/default_card_list_img.png';

export function ListItem({ id, img, title, authors, rating, year }) {
  function getAuthorString(authors, year) {
    if (authors[1]) {
      return `${authors[0]}, ${authors[1]}, ${year}`;
    }
    return `${authors[0]}, ${year}`;
  }
  return (
    <Link to={`books/../../all/${id}`}>
      <div className={styles.card_list_wrapper}>
        <div className={styles.list_book_img}>
          <img src={img ? `https://strapi.cleverland.by${img.url}` : defaultListImg} alt='img' />
        </div>
        <div className={styles.content_card_list}>
          <div className={styles.book_list_title}>{title.length < 50 ? title : `${title.slice(0, 50)}...`}</div>
          <div className={styles.book_list_author}>{getAuthorString(authors, year)}</div>
          <div className={styles.list_container}>
            <div className={styles.book_list_rating}>
              {rating ? <BooksRating id={id} rating={rating} /> : 'ещё нет оценок'}
            </div>
            <div className={styles.book_list_btn}>
              <button className={styles.card_list_btn} type='button'>
                Забронировать
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
