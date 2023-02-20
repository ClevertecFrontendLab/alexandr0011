import { useDispatch } from 'react-redux';
import { closeCategoriesError } from '../../redux/reducers/categories-reducer';
import { closeBooksError } from '../../redux/reducers/books-reducer';
import { closeBookError } from '../../redux/reducers/book-reducer';
import negativeImg from '../../resources/img/negative.png';
import crossImg from '../../resources/img/cross.png';
import styles from './error-component.module.scss';

const ERROR_MESSAGE = 'Что-то пошло не так. Обновите страницу через некоторое время.';

export function ErrorComponent() {

  const dispatch = useDispatch();

  function closeErrorHandler() {
    dispatch(closeCategoriesError())
    dispatch(closeBooksError())
    dispatch(closeBookError())
  }
  
  return (
    <div className={styles.wrapper} data-test-id='error'>
      <div className={styles.content}>
        <div>
          <img src={negativeImg} alt='error' />
          <h3>{ERROR_MESSAGE}</h3>
        </div>
        <button type='button' onClick={closeErrorHandler}>
          <img src={crossImg} alt='cancel' />
        </button>
      </div>
    </div>
  );
}
