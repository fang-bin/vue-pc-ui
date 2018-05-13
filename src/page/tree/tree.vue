<template>
  <div class="cro-wrap">
    <aside-tree :theModel="treeData">
      <div class="tree-add">
        <span class="add-icon"></span>
        添加分类
      </div>
    </aside-tree>
    <des-content :modal="desData"></des-content>
  </div>
</template>

<script>
import desContent from '../../components/layCro/desContent';
import asideTree from '../../components/tree/asideTree';
import treeJson from './tree.json';
export default {
  data(){
    return {
      treeData: treeJson.data,
      desData: treeJson.params
    }
  },
  components: {
    asideTree,
    desContent
  }
}
</script>

<style lang="scss" scoped>
.tree-add{
  height: 40px;
  line-height: 40px;
  color: #f00;
  .add-icon{
    position: relative;
    width: 7px;
    height: 7px;
    vertical-align: middle;
    display: inline-block;
    &::after{
      content: "";
      width: 7px;
      height: 1px;
      left: 0;
      top: 3px;
      position: absolute;
      background-color: #f00;
    }
    &::before{
      content: "";
      width: 1px;
      height: 7px;
      left: 3px;
      top: 0;
      position: absolute;
      background-color: #f00;
    }
  }
}
</style>

