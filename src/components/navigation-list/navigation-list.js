import { NavLink, useMatch } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeBooksError } from '../../redux/reducers/books-reducer';
import { closeCategoriesError } from '../../redux/reducers/categories-reducer';
import styles from './navigation-list.module.scss';
import arrowSvg from '../../resources/svg/accordion_arrow.svg';

export function NavigationList({
  closeBurgerHandler,
  checkAccordionState,
  booksStoreTestId,
  categoryBooksTestId,
  termsTestId,
  contactsTestId,
}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(true);
  const match = useMatch({
    path: 'books',
    end: false,
  });
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  const activeLink = ({ isActive }) => (isActive ? styles.active_link : '');

  function onAccordionOpen() {
    setIsAccordionOpen((isAccordionOpen) => !isAccordionOpen);

    if (checkAccordionState) {
      checkAccordionState(!isAccordionOpen);
    }
  }

  function liftUpScreenHandler() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  function clickHandler() {
    liftUpScreenHandler();
    setIsAccordionOpen(false);
    dispatch(closeBooksError());
    dispatch(closeCategoriesError());

    if (checkAccordionState) {
      checkAccordionState(false);
    }
  }

  const booksCategorylinks = categories.map((category) => (
    <li key={category.id}>
      <NavLink
        data-test-id={categoryBooksTestId}
        to={`books/${category.path}`}
        onClick={() => closeBurgerHandler && closeBurgerHandler()}
        className={({ isActive }) => `${isActive ? styles.book_category_link_active : ''}`}
      >
        {category.name} <span>0</span>
      </NavLink>
    </li>
  ));

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.link_items}>
        <li className={!isAccordionOpen ? styles.main_menu_item : styles.main_menu_item_active}>
          <NavLink to='books/all' className={match ? styles.active_accordion_title : ''}>
            <button
              data-test-id={booksStoreTestId}
              type='button'
              className={styles.accordion_btn}
              onClick={onAccordionOpen}
            >
              <span>Витрина книг</span>
              <img src={arrowSvg} alt='accordion btn' />
            </button>
          </NavLink>
        </li>
        <ul className={!isAccordionOpen ? styles.list_items : styles.list_items_active}>
          <li>
            <NavLink
              data-test-id={categoryBooksTestId}
              to='books/all'
              onClick={() => closeBurgerHandler && closeBurgerHandler()}
              className={({ isActive }) => `${isActive ? styles.book_category_link_active : ''}`}
            >
              Все книги
            </NavLink>
          </li>
          {booksCategorylinks}
        </ul>
        <li className={styles.main_menu_item}>
          <NavLink data-test-id={termsTestId} onClick={() => clickHandler()} to='terms' className={activeLink}>
            Правила пользования
          </NavLink>
        </li>
        <li className={styles.main_menu_item}>
          <NavLink data-test-id={contactsTestId} onClick={() => clickHandler()} to='agreements' className={activeLink}>
            Договор оферты
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
