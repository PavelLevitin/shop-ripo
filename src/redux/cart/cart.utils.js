export const addItemToCart=(cartItems,cartItemToAdd)=>{
  
   const existingCartItem =cartItems.find(
       (cartItem) => cartItem.id ===cartItemToAdd.id
   );
    
   if(existingCartItem ){
       return cartItems.map(cartItem =>
          cartItem.id === cartItemToAdd.id ? {...cartItem , quantity : cartItem.quantity + 1,total:cartItem.quantity * cartItem.price +cartItem.price}
          :cartItem

          )
   }
   
    return [...cartItems , {...cartItemToAdd , quantity:1}]

}


