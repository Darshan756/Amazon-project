export const cart = [];

export function addToCart(productId){
  const quantitySelected = document.querySelector(`.js-quantity-selector-${productId}`).value;
  let quantityValue =  Number(quantitySelected)
  let matchingItem;
    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
           matchingItem = item;
        }
    })
    
    if(matchingItem){
      matchingItem.quantity += quantityValue
    }else{
      cart.push({
      productId:productId,
      quantity:quantityValue
    });
    }
}
