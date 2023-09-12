import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import categories from './categories';
import products from './products';
import  cart  from './cart';


let reducers = combineReducers({
    categories: categories,
    product:products,
    cart:cart
   
})

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();