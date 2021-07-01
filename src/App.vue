<template>
  <div>
    <AppHeader></AppHeader>
    <div>Im an App</div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
export default {
  name: "App",
  components: {
    AppHeader,
  },
  mounted() {
    console.log("CLIENT" + process.env.CLIENT_ID);
  },
};
</script>

<style>
</style>
