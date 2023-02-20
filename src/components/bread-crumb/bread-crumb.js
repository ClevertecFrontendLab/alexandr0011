import { NavLink } from 'react-router-dom';
import styles from './bread-crumb.module.scss';

export function BreadCrumb({ categoryPath, categories, title }) {
  return (
    <section className={styles.books_nav}>
      <div className={styles.books_nav_wrapper}>
        <NavLink to={`../books/${categoryPath}`}>{categories}</NavLink>
        <span>/</span>
        {title}
      </div>
    </section>
  );
}
