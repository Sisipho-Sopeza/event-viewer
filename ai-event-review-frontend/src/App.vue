<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from "@/components/Navbar.vue";

export default {
  components: {
    AppNavbar,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #f4f4f4;
}
</style>
