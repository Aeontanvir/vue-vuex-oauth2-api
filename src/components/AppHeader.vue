<template>
  <div class="ui secondary pointing menu">
    <a class="active item"> Home </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
        <a href="#" class="item"> Galleries </a>
        <a href="#" class="item"> Upload </a>
        <a href="#" class="item" @click="logout"> Logout </a>
      </div>
      <a v-else href="#" class="ui item" @click="login"> Log In </a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login", "logout"]),
};
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
