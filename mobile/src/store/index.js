import { createStore } from 'redux';

const initialState = {
    period: new Date().getMonth() + 1,
    balance: {},
    budgets: []
}

const reducer = (state = initialState, action) => {
    return state;
}

const store = createStore(reducer);

export default store;