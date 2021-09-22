<template>
  <section class="text-center">
    <div class="p-16 text-5xl font-bold text-gray-600">
      <h2>Products</h2>
      <product-card />
    </div>
  </section>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
};
</script>