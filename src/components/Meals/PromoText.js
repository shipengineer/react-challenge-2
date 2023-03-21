import styles from './PromoText.module.css';

import React from 'react';

const PromoText = () => {
  return (
    <section className={styles['promo-text']}>
      <h2>Оналйн Суши Ресторан Кирихо</h2>
      <p>Заходи налетай, скорей поедай</p>
      <p>Не задерживаем, все вовремя и вкусно</p>
    </section>
  );
};

export default PromoText;
