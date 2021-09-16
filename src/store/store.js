import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cupcake: [{
            title: 'Cream',
            price: 12.99,
            image: 'https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            id: 1
        },
        {
            title: 'Choc',
            price: 10.99,
            image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 2
        },
        {
            title: 'Frosting',
            price: 14.99,
            image: 'https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 3
        },
        {
            title: 'Berry',
            price: 9.99,
            image: 'https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 4
        },
        {
            title: 'Deluxe',
            price: 19.99,
            image: 'https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 5
        },
        {
            title: 'Oreo',
            price: 19.99,
            image: 'https://images.pexels.com/photos/783274/pexels-photo-783274.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
            id: 6
        },
        ]
    },
    getters: {},
    mutations: {},
    actions: {}
});