import styles from './Header.module.css';
import React, { useContext } from 'react';
import sushiImage from '../../sushi.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>Кирихо</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={sushiImage} alt='Блюда японсокй кухни' />
      </div>
    </React.Fragment>
  );
};

export default Header;
