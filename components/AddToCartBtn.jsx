import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const AddToCartBtn = ({ btnStyles, text, icon, id, currency, name, description, images, price }) => {
  const { addItem } = useShoppingCart();

  const gadget = {
    id: id,
    currency: currency,
    name: name,
    description: description,
    images: images,
    price: price,
  };

  return (
    <button
      className={`${btnStyles}`}
      onClick={() => {
        addItem(gadget);
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
