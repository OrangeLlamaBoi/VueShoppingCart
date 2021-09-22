<template>
  <ul
    class="
      px-32
      py-16
      grid
      row-auto
      gap-10
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-4
    "
  >
    <li
      class="rounded-lg shadow-lg"
      v-for="cupcakes in cupcake"
      :key="cupcakes.id"
    >
      <img
        class="rounded-md w-screen object-cover max-h-60"
        :src="cupcakes.image"
      />
      <div class="py-2 px-8 text-gray-600">
        <div class="grid grid-cols-2 mt-10">
          <span class="text-xl font-bold text-left"> {{ cupcakes.title }}</span>
          <span class="text-base font-medium text-right"
            >${{ cupcakes.price }}</span
          >
        </div>
        <button
          class="
            bg-purple-200
            font-medium
            px-2
            py-2
            mt-10
            text-lg
            mb-4
            w-full
            rounded
            transition-all
            hover:bg-purple-300
          "
          type="button"
          v-on:click="addToCart(cupcakes)"
          :disabled="checkCart(cupcakes.id)"
        >
          Add to Cart
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    cupcake() {
      return this.$store.state.cupcake;
    },
  },
  methods: {
    checkCart(id) {
      return this.$store.state.cart.find((item) => item.id === id);
    },
    addToCart(cupcakes) {
      this.$store.state.cart.push(cupcakes);
    },
  },
};
</script>