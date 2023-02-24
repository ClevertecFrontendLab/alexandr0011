import avatarImg from '../../resources/img/avatar.png';
import cleverlandLogo from '../../resources/img/logo.png';
import { Burger } from '../burger/burger';

import styles from './header.module.scss';

const USERNAME = 'Иван';

export function Header() {
  return (
    <header>
      <div className={styles.header_wrapper}>
        <img className={styles.logo} src={cleverlandLogo} alt='Cleverland logo' />
        <Burger/>
        <div className={styles.title}>
          <h1>Библиотека</h1>
        </div>
        <div className={styles.person}>
          <p>Привет, {USERNAME}!</p>
          <img src={avatarImg} alt='avatar' />
        </div>
      </div>
    </header>
  );
}