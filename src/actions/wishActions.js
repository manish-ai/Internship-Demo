import { ADD_TO_WISH, REMOVE_FROM_WISH } from "./types";


export const addToWish = (items, product) => (dispath) => {
    const wishItems = items.slice()
    var cook = items.slice()
    let alreadyInwish = false;
    wishItems.forEach(item => {
        if (item.id === product.id) {
            alreadyInwish = true;
            item.count++;
        }
    });
    if (alreadyInwish === false) {
        wishItems.push({ ...product, count: 1 });
        cook.push({ id: product.id, count: 1 });
    }
    console.log(cook)
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
    return dispath({
        type: ADD_TO_WISH,
        payload: {
            wishItems: wishItems
        }
    })


}

export const removeFromWish = (items, product) => (dispatch) => {
    const wishItems = items.slice().filter((a) => a.id !== product.id);
    localStorage.setItem("wishItems", JSON.stringify(wishItems));
    dispatch({ type: REMOVE_FROM_WISH, payload: { wishItems } });
};