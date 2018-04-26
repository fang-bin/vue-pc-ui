<template>
<div class="aside-tree" ref="asideTree">
  <slot></slot>
  <ul v-for="(menuItem,index) in theModel" :key="index" :style="styles">
    <i-tree :model="menuItem" :choose="defaultArr" :indexArr="[]" :indexNum="index" @cancelAct="cancelAct" ref="tree"></i-tree>
  </ul>
</div>
</template>

<script>
import iTree from './iTree';
export default {
  props: {
    theModel: Array,
    width: {
      type: Number,
      default: 200
    },
  },
  data(){
    return {
      defaultArr: [],
    }
  },
  components: {
    iTree
  },
  methods:{
    cancelAct(...data){   //取消选中效果
      if (Array.isArray(data)){
        this.defaultArr = data;
      }
      this.defaultArr = data[0];
    }
  },
  computed: {
    styles (){
      return {
        'width': this.width + 'px'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
$color-defalut: #333;
.aside-tree{
  // width: 200px;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 5px;
  overflow: hidden;
}
</style>


