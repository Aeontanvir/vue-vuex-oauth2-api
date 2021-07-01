<template>
  <div class="ui secondary pointing menu">
    <a class="active item"> Home </a>
    <a class="item"> Messages </a>
    <a class="item"> Friends </a>
    <div class="right menu">
      <div class="item">
        <div class="ui icon input">
          <input type="text" placeholder="Search..." />
          <i class="search link icon"></i>
        </div>
      </div>
      <a class="ui item"> Log In </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
</style>