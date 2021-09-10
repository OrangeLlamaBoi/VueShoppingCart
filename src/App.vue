<template>
  <div id="app">
    <nav>
      <h2>CupCakes</h2>
    </nav>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div class="bg-red-500">hi</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import "./assets/tailwind.css";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>