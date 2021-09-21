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
      class="bg-white rounded-lg"
      v-for="cupcakes in cupcake"
      :key="cupcakes.id"
    >
      <img
        class="rounded-md w-screen object-cover max-h-60"
        :src="cupcakes.image"
      />
      <div class="py-2 px-8 text-gray-600">
        <span class="px-10 text-xl font-bold"> {{ cupcakes.title }}</span>
        <span class="px-10 text-xl font-bold">${{ cupcakes.price }}</span>
        <button
          class="
            bg-purple-200
            font-bold
            px-3
            mt-2
            text-xl
            py-4
            mb-4
            w-full
            rounded-md
            transition-all
            hover:bg-purple-300
          "
          type="button"
          v-on:click="addToCart(cupcakes)"
        >
          ADD TO CART
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
    addToCart(cupcakes) {
      this.$store.state.cart.push({
        title: cupcakes.title,
        price: cupcakes.price,
        image: cupcakes.image,
        id: cupcakes.id,
        quantity: cupcakes.quantity,
      });
    },
  },
};
</script>