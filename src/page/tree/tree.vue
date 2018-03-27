<template>
  <div class="tree">
    <aside-tree :theModel="treeData">
      <div class="tree-add">
        <span class="add-icon"></span>
        添加分类
      </div>
    </aside-tree>
    <div class="content">
      <h1>参数说明</h1>
    </div>
  </div>
</template>

<script>
import asideTree from '../../components/tree/asideTree';
import treeJson from './tree.json';
export default {
  data(){
    return {
      treeData: treeJson.data
    }
  },
  components: {
    asideTree
  }
}
</script>

<style lang="scss" scoped>
.tree{
  display: flex;
  justify-content: center;
  .content{
    margin-left: 20px;
    width: 600px;
    border-radius: 5px;
    background-color: #fff;
  }
}
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

