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
          @click.prevent="showMiniCart = !showMiniCart"
        >
          ({{ cartTotal }}) Cart
        </button>
        <div v-if="showMiniCart">
          <mini-cart />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import MiniCart from "./MiniCart.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    MiniCart,
  },
  data() {
    return {
      showMiniCart: false,
    };
  },
  computed: mapGetters({
    cartTotal: "cartTotal",
  }),
};
</script>