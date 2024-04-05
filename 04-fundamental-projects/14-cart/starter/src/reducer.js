import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: new Map() };
    }
    if (action.type === REMOVE) {
        const newCart = new Map(state.cart);
        const {id} = action.payload;
        newCart.delete(id);
        return {...state, cart: newCart};
    }
    if (action.type === INCREASE) {
        const newCart = new Map(state.cart);
        const {id} = action.payload;
        console.log('cartItem: ', newCart.get(id));
        const cartItem = newCart.get(id);
        const newCartItem = {...cartItem, amount: cartItem.amount + 1};
        newCart.set(id, newCartItem);
        console.log('cartItem: ', newCart.get(id));
        return {...state, cart: newCart};
    }
    if (action.type === DECREASE) {
        const newCart = new Map(state.cart);
        const {id} = action.payload;
        const cartItem = newCart.get(id);
        if (cartItem.amount > 1) {
            const newCartItem = {...cartItem, amount: cartItem.amount - 1};
            newCart.set(id, newCartItem);
        }
        else {
            newCart.set(id, cartItem);
        }

        // Alternatively, if the cartItem amount goes to 0, we can remove the item from the cart.
        /*
        if (cartItem.amount === 1) {
            newCart.delete(id);
            return {...state, cart: newCart}
        }

        const newItem = {...item, amount: item.amount - 1};
        newCart.set(id, newItem);
        return {...state, cart: newCart};
        */
       
        return {...state, cart: newCart};
    }
    if (action.type === LOADING) {
        console.log('at loading');
        return {...state, laoding:true};
    }
    if (action.type === DISPLAY_ITEMS) {
        console.log('at display');
        return {...state, loading:false, cart: new Map(action.payload.cart.map((item) => [item.id, item]))}
    }
    throw new Error(`no matching action type: ${action.type}`)
};

export default reducer;