<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item"> Home </router-link>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <div class="item">
          <div class="ui icon input">
            <input type="text" placeholder="Search..." />
            <i class="search link icon"></i>
          </div>
        </div>
        <router-link to="/" class="item"> Galleries </router-link>
        <router-link to="/upload" class="item"> Upload </router-link>
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
