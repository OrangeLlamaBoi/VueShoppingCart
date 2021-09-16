<template>
  <div id="app">
    <app-header />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import "./assets/tailwind.css";
import AppHeader from "./components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>