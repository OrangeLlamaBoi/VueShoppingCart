<template>
  <div
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
      shop-items
    "
  >
    <div class="bg-white rounded-lg shop-item">
      <img
        class="rounded-md w-screen object-cover max-h-60 shop-item-image"
        src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      />
      <div class="py-2 px-8 text-gray-600 shop-item-details">
        <span class="px-10 text-xl font-bold shop-item-title">
          <router-link :to="{ name: 'product', params: { id: 23 } }"
            >Cream</router-link
          ></span
        >
        <span class="px-10 text-xl font-bold shop-item-price">$12.99</span>
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
            btn btn-primary
            shop-item-button
          "
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shop-item">
      <img
        class="rounded-md w-screen object-cover max-h-60 shop-item-image"
        src="https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <div class="py-2 px-8 text-gray-60 shop-item-details">
        <span class="px-10 text-xl font-bold shop-item-title">Choc</span>
        <span class="px-10 text-xl font-bold shop-item-price">$10.99</span>
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
            btn btn-primary
            shop-item-button
          "
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shop-item">
      <img
        class="rounded-md w-screen object-cover max-h-60 shop-item-image"
        src="https://images.pexels.com/photos/1055271/pexels-photo-1055271.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <div class="py-2 px-8 text-gray-60 shop-item-details">
        <span class="px-10 text-xl font-bold shop-item-title">Frosting</span>
        <span class="px-10 text-xl font-bold shop-item-price">$14.99</span>
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
            btn btn-primary
            shop-item-button
          "
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shop-item">
      <img
        class="rounded-md w-screen object-cover max-h-60 shop-item-image"
        src="https://images.pexels.com/photos/3081657/pexels-photo-3081657.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <div class="py-2 px-8 text-gray-60 shop-item-details">
        <span class="px-10 text-xl font-bold shop-item-title">Berry</span>
        <span class="px-10 text-xl font-bold shop-item-price">$9.99</span>
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
            btn btn-primary
            shop-item-button
          "
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shop-item">
      <img
        class="rounded-md w-screen object-cover max-h-60 shop-item-image"
        src="https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <div class="py-2 px-8 text-gray-60 shop-item-details">
        <span class="px-10 text-xl font-bold shop-item-title">Deluxe</span>
        <span class="px-10 text-xl font-bold shop-item-price">$19.99</span>
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
            btn btn-primary
            shop-item-button
          "
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shop-item">
      <img
        class="rounded-md w-screen object-cover max-h-60 shop-item-image"
        src="https://images.pexels.com/photos/783274/pexels-photo-783274.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
      />
      <div class="py-2 px-8 text-gray-60 shop-item-details">
        <span class="px-10 text-xl font-bold shop-item-title">Oreo</span>
        <span class="px-10 text-xl font-bold shop-item-price">$19.99</span>
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
            btn btn-primary
            shop-item-button
          "
          type="button"
        >
          ADD TO CART
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
