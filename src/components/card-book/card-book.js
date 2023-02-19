import { CardItem } from './card-item/card-item';
import { ListItem } from './list-item/list-item';
import { VIEW_TYPE_TILE } from '../../constants/constants';
import styles from './card-book.module.scss';

export function CardBook({ viewType, id, img, rating, title, authors, year }) {
  return (
    <div data-test-id='card' className={viewType === VIEW_TYPE_TILE ? styles.card_item : styles.card_list_item}>
      {viewType === VIEW_TYPE_TILE ? (
        <CardItem id={id} img={img} rating={rating} title={title} authors={authors} year={year} />
      ) : (
        <ListItem id={id} img={img} rating={rating} title={title} authors={authors} year={year} />
      )}
    </div>
  );
}
