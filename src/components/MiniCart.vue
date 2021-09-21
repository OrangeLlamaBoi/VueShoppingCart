<template>
  <div class="bg-white border-2 border-gray-500 rounded-md absolute right-16">
    <div
      class="grid grid-cols-2 gap-20 m-5"
      v-for="carts in cart"
      :key="carts.id"
    >
      <img class="w-24" :src="carts.image" alt="" />
      <div class="grid grid-rows-3">
        <strong class="tracking-wider font-bold">{{ carts.title }}</strong>
        <p class="tracking-wider font-bold">
          {{ carts.quantity }} x ${{ carts.price }}
        </p>
        <button
          class="bg-gray-500 rounded p-2 tracking-wider font-bold text-white"
          v-on:click="removeItem(carts)"
        >
          remove
        </button>
        <button type="button" v-on:click="increase(carts)">Increase</button>
        <button type="button" v-on:click="deccrease(carts)">Deccrease</button>
      </div>
    </div>

    <div class="flex mx-5 my-8 justify-between">
      <span
        class="tracking-wider text-xl p-4 font-bold justify-center align-middle"
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
          text-white text-xl
          font-bold
        "
      >
        Clear Cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total: function () {
      let total = 0;
      for (let carts of this.$store.state.cart) {
        total += carts.price * carts.quantity;
      }
      return total.toFixed(2);
    },
  },
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