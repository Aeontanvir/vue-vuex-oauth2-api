<template>
  <div>
    <AppHeader></AppHeader>
    <div>Im an App</div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader,
  },
};
</script>

<style>
</style>
