<template>
  <div class="des-content">
    <h1>参数说明</h1>
    <ul>
      <li v-for="(item,index) in modal" :key="index">
        <h3 class="tit">{{ item.tit }}</h3>
        <p class="des">{{ item.des }} <span>默认：{{ item.def }}</span><span>类型：{{ item.type }}</span></p>
        <div v-if="item.other">
          <p class="other" v-for="(e,i) in item.other" :key="i"></p>
        </div>
        <p class="all-can" v-else>。。。</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    modal: Array,
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
$green: #41b883;
$bule: #35495e;
$white: #fff;
$black: #555;
$gary: #f5f5f5;
$font1: 18px;
$font2: 16px;
$font3: 14px; 
.des-content {
  margin-left: 20px;
  width: 600px;
  overflow: hidden;
  border-radius: 5px;
  background-color: #fff;
  color: $black;
  h1{
    padding: 0 6px;
    font-size: $font1;
    color: $white;
    background-color: $green;
    line-height: 30px;
    height: 30px;
  }
  ul{
    padding: 0 10px;
    margin-top: 10px;
    li{
      margin-bottom: 5px;
      font-size: $font3;
      .tit{
        font-size: $font2;
        line-height: 20px;
        color: $green;
      }
      .des{
        line-height: 20px;
        span{
          margin-left: 20px;
        }
      }

    }
  }
}
</style>


