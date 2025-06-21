import { cart } from "../data/cart.js";

let cartSavedItems = JSON.parse(localStorage.getItem(cart));

console.log(cartSavedItems)
