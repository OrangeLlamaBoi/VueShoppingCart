<template>
  <div class="bg-white shadow-lg rounded-md absolute right-16">
    <div
      class="grid grid-cols-2 m-5 mt-9"
      v-for="carts in cart"
      :key="carts.id"
    >
      <img class="w-24 rounded" :src="carts.image" alt="" />
      <div class="grid grid-rows-2">
        <strong class="tracking-wider text-center text-lg font-bold">{{
          carts.title
        }}</strong>

        <div class="grid grid-cols-4 text-center">
          <button
            class="
              text-lg
              font-bold
              text-purple-500
              bg-purple-200
              rounded
              transition-all
              hover:bg-purple-300
            "
            type="button"
            v-on:click="increase(carts)"
          >
            +
          </button>
          <p class="text-gray-500 mt-0.5 leading-9 font-normal">
            {{ carts.quantity }}
          </p>
          <button
            class="
              text-lg
              font-bold
              text-purple-500
              bg-purple-200
              rounded
              transition-all
              hover:bg-purple-300
            "
            type="button"
            v-on:click="deccrease(carts)"
          >
            -
          </button>
          <button
            class="
              bg-gray-200
              rounded
              p-2
              tracking-wider
              font-bold
              ml-4
              text-gray-500
              transition-all
              hover:bg-gray-300
            "
            v-on:click="removeItem(carts)"
          >
            🗑️
          </button>
        </div>

        <p
          class="
            text-base
            tracking-wider
            mt-2
            text-center text-gray-500
            font-medium
          "
        >
          ${{ carts.price }}
        </p>
      </div>
    </div>

    <div class="flex mx-5 my-8 justify-between">
      <span
        class="
          tracking-wider
          text-lg
          p-4
          font-medium
          justify-center
          align-middle
        "
        >Total: ${{ total }}</span
      >
      <button
        v-on:click="clearCart"
        type="button"
        href=""
        class="
          bg-red-400
          p-4
          rounded
          tracking-wider
          text-white text-medium
          font-medium
          leading-none
        "
      >
        Clear Cart
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    cart: "cart",
    total: "total",
  }),
  methods: {
    removeItem: function (carts) {
      this.$store.state.cart.splice(carts, 1);
    },
    increase: function (carts) {
      carts.quantity += 1;
    },
    deccrease: function (carts) {
      if (carts.quantity > 1) {
        carts.quantity -= 1;
      } else {
        this.$store.state.cart.splice(carts, 1);
      }
    },
    clearCart: function () {
      let length = this.$store.state.cart.length;
      this.$store.state.cart.splice(0, length);
      console.log(length);
    },
  },
};
</script>