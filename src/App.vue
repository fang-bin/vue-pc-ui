<template>
  <div id="app">
    <img src="./assets/logo.png" class="logo">
    <router-view class="router-view" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.logo{
  margin: 10px auto;
  display: block;
}
.router-view{
  padding: 20px;
}
</style>
