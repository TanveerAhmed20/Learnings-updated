import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, CardFooter, CardText, Container } from "reactstrap";
import { addToCart, decrementFromCart, selectCartItems ,selectCartTotal} from "../../store/cart/cartSlice";
import "./cart.css";
const Cart = () => {
  const cartItems = useSelector(selectCartItems);
 const cartTotal = useSelector(selectCartTotal);
  const dispatch = useDispatch();

  function handleDeleteFromCart(product) {
    dispatch(decrementFromCart(product));
  }

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }
  return (
    <Container className="flex-row cart-container">
      <Container className="flex-col card-container">
        {cartItems &&
          cartItems.map((item) => (
            <Card className="mt-2">
              <CardBody className="flex-row">
                <div>
                  <p>ITEM ID: {item.id}</p>
                  <p>{item.name}</p>
                  <p>QUANTITY: {item.quantity}</p>
                  <p> Price : {item.price}</p>
                </div>
                <div className="flex-col">
                  <Button onClick={() => handleDeleteFromCart(item)}>-</Button>
                  <Button onClick={() => handleAddToCart(item)}>+</Button>
                </div>
              </CardBody>
              <CardFooter></CardFooter>
            </Card>
          ))}
      </Container>
      {cartTotal ? 
      <Container className = "cart-total-container">
           <Card className="mt-2">
              <CardBody>
                <CardText>
                    Cart Total : {`${cartTotal.toFixed(2)}`}$
                </CardText>
                <Button>
                    CHECKOUT
                </Button>
              </CardBody>
            </Card>
      </Container>:''
}
    </Container>
  );
};

export default Cart;
