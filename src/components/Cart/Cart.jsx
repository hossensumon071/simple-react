import "./Cart.css";

const Cart = ({cart}) => {

    console.log(cart)

   let totalPrice = 0;
   let shipping = 0;
   for(const product of cart) {
    totalPrice = totalPrice + product.price;
    shipping = shipping + product.shipping
   }

   const tax = totalPrice*3 / 100;
   const grandTotal = totalPrice + shipping + tax

  return (
    <div className="cart">
      <h4> Order Summary </h4>
      <p>Selected Items: {cart.length}</p>
      <p>totalPrice Price: ${totalPrice}</p>
      <p>totalPrice Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <p>Grand totalPrice: ${grandTotal.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
