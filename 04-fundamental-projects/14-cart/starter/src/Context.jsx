import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import {
    CLEAR_CART,
    REMOVE,
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEMS,
} from './actions';
import cartItems from './data';
import { getTotals } from "./utils";

const url = 'https://www.course-api.com/react-useReducer-cart-project';

const AppContext = createContext();

const initialState = {
    loading:false,
    cart: new Map(),
}

export const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const {totalAmount, totalCost} = getTotals(state.cart);

    const clearCart = () => {
        dispatch({ type: CLEAR_CART });
    };
    const remove = (id) => {
        dispatch({type: REMOVE, payload:{id}});
    };
    const increase = (id) => {
        dispatch({type: INCREASE, payload: {id}});
    };
    const decrease = (id) => {
        dispatch({type: DECREASE, payload: {id}});
    };
    
    const fetchData = async (url) => {
        dispatch({type:LOADING});
        const response = await fetch(url);
        try {
            const cart = await response.json();
            console.log('cart:', cart)
            dispatch({type:DISPLAY_ITEMS, payload: {cart}});
        } catch (e) {
            console.log(e);
            dispatch({type:LOADING});
        }
    };  

    useEffect(()=>{
        fetchData(url);
    }, []);
    return (
        <AppContext.Provider value={{...state, clearCart, remove, increase, decrease, totalAmount, totalCost}}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
