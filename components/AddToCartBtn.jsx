import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import { useToast } from './ui/use-toast';

const AddToCartBtn = ({ btnStyles, text, icon, id, currency, name, description, images, price }) => {
  const { addItem } = useShoppingCart();
  const { toast } = useToast();

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
        toast({
          title: `${name} has been added to the cart`,
        });
      }}
    >
      <div>{text}</div>
      <div>{icon}</div>
    </button>
  );
};

export default AddToCartBtn;
