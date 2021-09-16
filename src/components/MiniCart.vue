<template>
  <div class="bg-white shadow-xl hidden">
    <div class="grid grid-cols-2 gap-20">
      <div>
        <strong class="tracking-wider font-bold">Product title</strong>
        <br />
        <p class="tracking-wider font-bold">1 x $23</p>
      </div>
      <div>
        <a
          href=""
          class="
            bg-gray-500
            rounded
            px-2
            py-1
            tracking-wider
            font-bold
            text-white text-center
          "
          >remove</a
        >
      </div>
    </div>
    <div class="flex mt-8 justify-between">
      <span class="tracking-wider font-bold">Total: $23</span>
      <a
        href=""
        class="bg-red-400 px-4 rounded tracking-wider text-white font-bold"
        >Clear Cart</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>