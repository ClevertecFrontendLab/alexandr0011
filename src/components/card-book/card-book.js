import { useCallback } from 'react';

import { VIEW_TYPE_TILE } from '../../constants/constants';

import { CardItem } from './card-item/card-item';
import { Hightlight } from './hightlight/hightlight';
import { ListItem } from './list-item/list-item';

import styles from './card-book.module.scss';

export function CardBook({ viewType, id, img, rating, title, authors, year, filter, category }) {
  const light = useCallback(
    (string, strLength) => <Hightlight filter={filter} string={string} strLength={strLength} />,
    [filter]
  );

  return (
    <div data-test-id='card' className={viewType === VIEW_TYPE_TILE ? styles.card_item : styles.card_list_item}>
      {viewType === VIEW_TYPE_TILE ? (
        <CardItem
          id={id}
          img={img}
          rating={rating}
          title={light(title, 40)}
          authors={authors}
          year={year}
          category={category}
        />
      ) : (
        <ListItem
          id={id}
          img={img}
          rating={rating}
          title={light(title, 50)}
          authors={authors}
          year={year}
          category={category}
        />
      )}
    </div>
  );
}
