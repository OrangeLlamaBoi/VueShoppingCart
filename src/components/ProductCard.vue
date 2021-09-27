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
      v-for="cupcake in cupcakes"
      :key="cupcake.id"
    >
      <img
        class="rounded-md w-screen object-cover max-h-60"
        :src="cupcake.image"
      />
      <div class="py-2 px-8 text-gray-600">
        <div class="grid grid-cols-2 mt-10">
          <span class="text-xl font-bold text-left"> {{ cupcake.title }}</span>
          <span class="text-base font-medium text-right"
            >${{ cupcake.price }}</span
          >
        </div>
        <button
          :disabled="checkCart(cupcake.id)"
          :class="
            checkCart(cupcake.id)
              ? 'bg-red-300 cursor-not-allowed'
              : 'bg-purple-200 hover:bg-purple-300'
          "
          class="
            font-medium
            px-2
            py-2
            mt-10
            text-lg
            mb-4
            w-full
            rounded
            transition-all
          "
          type="button"
          v-on:click="addToCart(cupcake)"
        >
          {{ checkCart(cupcake.id) ? "In Cart" : "Add to Cart" }}
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    cupcakes() {
      return this.$store.getters.cupcakes;
    },
  },
  methods: {
    checkCart(id) {
      return this.$store.getters.checkCart.find((item) => item.id === id);
    },
    addToCart(cupcakes) {
      this.$store.dispatch("addToCart", cupcakes);
    },
  },
};
</script>