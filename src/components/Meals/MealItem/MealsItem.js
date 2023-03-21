import styles from './MealItem.module.css';

import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

const MealsItem = (props) => {
  const cartContext = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.mealsDetails.id,
      name: props.mealsDetails.name,
      amount: amount,
      price: props.mealsDetails.price,
    });
  };

  return (
    <li key={Math.random().toString()} className={styles.meal}>
      <div>
        <h3>{props.mealsDetails.name}</h3>

        <div className={styles.description}>
          {props.mealsDetails.description}
        </div>
        <div className={styles.price}>
          ${props.mealsDetails.price.toFixed(2)}
        </div>
      </div>
      <div>
        <MealItemForm onAddCart={addToCartHandler} id={props.mealsDetails.id} />
      </div>
    </li>
  );
};

export default MealsItem;
