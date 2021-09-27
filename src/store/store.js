import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cart: [],
        cupcakes: [{
            title: 'Cream',
            price: 12.99,
            image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            id: 1,
            quantity: 1
        },
        {
            title: 'Choc',
            price: 10.99,
            image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 2,
            quantity: 1
        },
        {
            title: 'Frosting',
            price: 14.99,
            image: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 3,
            quantity: 1
        },
        {
            title: 'Berry',
            price: 9.99,
            image: 'https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 4,
            quantity: 1
        },
        {
            title: 'Deluxe',
            price: 19.99,
            image: 'https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 5,
            quantity: 1
        },
        {
            title: 'Oreo',
            price: 19.99,
            image: 'https://images.pexels.com/photos/783274/pexels-photo-783274.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 6,
            quantity: 1
        },
        ]
    },
    getters: {
        cupcakes(state) {
            return state.cupcakes;
        },
        cartTotal(state) {
            return state.cart.length;
        },
        cart(state) {
            return state.cart;
        },
        total(state) {
            let total = 0;
            for (let carts of state.cart) {
                total += carts.price * carts.quantity;
            }
            return total.toFixed(2);
        },
        checkCart(state) {
            return state.cart;
        }
    },
    mutations: {
        addToCart(state, cupcake) {
            state.cart.push(cupcake);
        },
        clearCart(state) {
            state.cart.splice(0, state.cart.length);
        },
        deccrease(state, carts) {
            if (carts.quantity > 1) {
                carts.quantity -= 1;
            } else {
                state.cart.splice(carts, 1);
            }
        },
        removeItem(state, carts) {
            state.cart.splice(carts, 1);
        }
    },
    actions: {
        addToCart({ commit }, cupcake) {
            commit("addToCart", cupcake)
        },
        clearCart({ commit }) {
            commit("clearCart")
        },
        deccrease({ commit }, carts) {
            commit("deccrease", carts)
        },
        removeItem({ commit }, carts) {
            commit("removeItem", carts)
        }
    }
});