import {handleAddtoCart, handleRemoveFromCart} from "../actions/index";

const initial_state = {
    menu: [
        {name: "NodeJS with React", price: 12, qty: 10},
        {name: "Vanilla JavaScript programming", price: 10, qty: 10},
        {name: "Bootstrap, HTML, CSS", price: 5, qty: 10},
        {name: "JQuery on steriods", price: 5, qty: 10},
        {name: "Function Currying", price: 10, qty: 10},
        {name: "Blockchain for everything", price: 15, qty: 10}
    ],
    cart: [],
    total: 0
}

const cartAdd = (state = {initial_state}, action) => {

    state.menu.map((menuArrItem) => {
        if ((menuArrItem.name === action.menuItem.name) && menuArrItem.qty > 0) {
            var flag = 0;
            //check if its already in cart then increase qty by 1
            state.cart = state.cart.map((cartItem, index) => {
                if (cartItem.name === action.menuItem.name) {
                    cartItem.qty += 1;
                    flag = 1;
                }
                return cartItem;
            });
            //if its not in cart, add it to cart
            if (flag === 0) {
                state.cart.push({
                    name: action.menuItem.name,
                    price: action.menuItem.price,
                    qty: 1
                });
            }

            //decrease item qty from menu
            state.menu = state.menu.map((menuitem1, index) => {
                if (menuitem1.name === action.menuItem.name) {
                    menuitem1.qty -= 1
                }
                return menuitem1;
            });

            state.total += action.menuItem.price;
        }
        else if ((menuArrItem.name === action.menuItem.name) && menuArrItem.qty === 0) {
            alert("No more seats available");
        }
    })
    console.log("after add call : " + JSON.stringify(state))
    return {
        ...state,
        [action.menu]: state.menu
    };
}

const cartRemove = (state = {}, action) => {
    var flag = 0, indexInd = 0;

    state.cart = state.cart.map((cartArrItem, index) => {

        if (cartArrItem.name === action.cartItem.name) {
            //increase qty in menu

            state.menu = state.menu.map((menuArrItem) => {
                if (menuArrItem.name === action.cartItem.name && menuArrItem.qty < 10) {
                    menuArrItem.qty += 1;
                }
                return menuArrItem;
            });
            //decrease or remove from cart
            if (cartArrItem.qty === 1) {
                flag = 1;
                indexInd = index;
            } else {
                cartArrItem.qty -= 1;
            }
        }

        return cartArrItem;
    });

    if (flag === 1) state.cart.splice(indexInd, 1);
    state.total -= action.cartItem.price;

    return {
        ...state,
        [action.cart]: state.cart
    };
}

const handleActions = (state = initial_state, action) => {

    switch (action.type) {
        case handleAddtoCart :
            return cartAdd(state, action);
        case handleRemoveFromCart :
            return cartRemove(state, action);
        default:
            return state;
    }
};

export default handleActions;