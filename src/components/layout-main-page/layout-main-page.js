import { Outlet } from 'react-router-dom';
import { NavigationList } from '../navigation-list/navigation-list';
import styles from './layout-main-page.module.scss';

export function LayoutMainPage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content_wrapper}>
        <NavigationList
          booksStoreTestId='navigation-showcase'
          categoryBooksTestId='navigation-books'
          termsTestId='navigation-terms'
          contactsTestId='navigation-contract'
        />
        <Outlet />
      </div>
    </section>
  );
}
