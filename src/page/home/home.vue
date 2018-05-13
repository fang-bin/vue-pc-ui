<template>
  <div class="home">
    <ul>
      <router-link tag="li" to="/tree">树形结构</router-link>
      <router-link tag="li" to="/tab">tab切换</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.home>ul{
  display: flex;
  justify-content: flex-start;
  li{
    cursor: pointer;
    width: 20%;
    &:hover{
      color: #f00;
    }
  }
}
</style>
