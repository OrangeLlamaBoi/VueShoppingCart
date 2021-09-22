<template>
  <nav class="grid grid-cols-2 text-gray-800 shadow-lg">
    <div class="py-8 px-16">
      <router-link to="/" class="px-2 font-bold text-xl tracking-wider"
        >Home</router-link
      >
    </div>
    <div class="py-8 px-16 justify-self-end">
      <div>
        <button
          class="
            block
            bg-gray-600
            py-2
            px-8
            rounded
            text-white
            tracking-wider
            font-bold
            relative
          "
        >
          ({{ cartTotal }}) Cart
        </button>
        <div>
          <mini-cart />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MiniCart from "./MiniCart.vue";
export default {
  components: {
    MiniCart,
  },
  computed: {
    cartTotal: function () {
      return this.$store.state.cart.length;
    },
  },
};
</script>