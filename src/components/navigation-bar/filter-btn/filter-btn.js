import { useState } from 'react';
import styles from './filter-btn.module.scss';
import sortDownSvg from '../../../resources/svg/sort_down.svg';
import sortUpSvg from '../../../resources/svg/sort_up.svg';

const FILTER_ID = 'filter';

export function FilterBtn() {
  const [sortIsChecked, setIsSortChecked] = useState(false);

  function sortHandler() {
    setIsSortChecked((sortIsChecked) => !sortIsChecked);
  }

  return (
    <div className={styles.filter}>
      <input type='checkbox' id={FILTER_ID} checked={sortIsChecked} onChange={sortHandler} />
      <label htmlFor={FILTER_ID}>
        <img src={sortIsChecked ? sortDownSvg : sortUpSvg} alt='filter btn' />
        <p>По рейтингу</p>
      </label>
    </div>
  );
}
