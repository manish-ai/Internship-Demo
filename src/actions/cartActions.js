import { ADD_TO_CART, REMOVE_FROM_CART } from "./types";

export const addToCart = (items, product) => (dispath) => {
    const cartItems = items.slice()
    var cook = items.slice()
    let alreadyInCart = false;
    cartItems.forEach(item => {
        if (item.id === product.id) {
            alreadyInCart = true;
            item.count++;
        }
    });
    if (alreadyInCart === false) {
        cartItems.push({ ...product, count: 1 });
        cook.push({ id: product.id, count: 1 });
    }
    console.log(cartItems);
    localStorage.setItem("CartItems", JSON.stringify(cartItems));
    return dispath({
        type: ADD_TO_CART,
        payload: {
            cartItems: cartItems
        }
    })
}

export const removeFromCart = (items, product) => (dispatch) => {
    if(product.count>1){
        const cartItems = items.slice()
        cartItems.forEach(item => {
            if (item.id === product.id) {
                item.count--;
            }
        });
       dispatch({
            type: ADD_TO_CART,
            payload: {
                cartItems: cartItems
            }
        })
    }
    else{
    const cartItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.removeItem(cartItems);
    dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
    }
   
    
};