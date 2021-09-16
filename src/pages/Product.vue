<template>
  <div
    class="
      grid grid-cols-2
      p-20
      w-screen
      h-screen
      bg-gradient-to-r
      from-red-200
    "
  >
    <div class="align-middle justify-self-center">
      <img
        class="max-w-xs rounded-sm"
        src="https://images.pexels.com/photos/1055270/pexels-photo-1055270.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
    </div>
    <div class="px-7 tracking-wider">
      <h1 class="text-8xl font-bold text-gray-500">Cream</h1>
      <p class="text-2xl font-bold text-gray-500 mt-3">$23/ UD</p>
      <input
        type="text"
        name=""
        id=""
        class="
          mt-3
          py-2
          px-2
          w-12
          font-bold
          text-center
          rounded-sm
          tracking-wider
          text-gray-500 text-xl
          focus:outline-none
        "
        placeholder="1"
      />
      <button
        class="
          ml-3
          px-6
          py-3
          rounded-sm
          bg-gray-500
          text-white text-center
          font-bold
          tracking-wider
        "
      >
        Add to cart
      </button>
      <p class="mt-3 font-bold tracking-wider text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, iste?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
};
</script>

<style>
</style>