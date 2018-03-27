<template>
  <li :class="['parent',{act: isChecked}]">
    <p @click="checkThis">
      <span class="icon-box">
        <i v-if="isFolder" class="icon" :class="[open ? 'folder-open': 'folder']"></i>
        <i v-if="!isFolder" class="icon file-text"></i>
      </span>
      {{ model.name }}
    </p>
    <ul v-show="open" v-if="isFolder" class="child">
      <i-tree v-for="(item, i) in model.children"  @cancelAct="cancelAct" :choose="choose" :indexArr="temIndexArr" :indexNum="i" :key="i" :model="item"></i-tree>
    </ul>
 </li>
</template>

<script>
export default {
  name: "iTree",
  props: {
    model: Object,
    indexNum: [Number, String],
    indexArr: Array,
    choose: Array
  },
  data() {
    return {
      open: false,
      isChecked: false,
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    },
    temIndexArr(){
        return [...this.indexArr, this.indexNum];
    }
  },
  methods: {
    checkThis () {
      if (this.isFolder) {
        this.open = !this.open;
      }
      this.$emit('cancelAct', this.temIndexArr);
      // this.isChecked = true;
    },
    cancelAct(obj){
      this.$emit('cancelAct',obj);
    },
    arrayEqual(arr1, arr2) {
        if(arr1 === arr2) return true;
        if(arr1.length != arr2.length) return false;  
        for(var i = 0; i < arr1.length; ++i) {  
            if(arr1[i] !== arr2[i]) return false;  
        }
        return true;
    }
  },
  watch:{
    choose: function (newVal){
      if (this.arrayEqual(this.temIndexArr, newVal)){
        this.isChecked = true;
      }else{
        this.isChecked = false;
      }
    }
  },
};
</script>

<style scoped lang="scss">
$color-default: #333;
$color-info: blue;
.parent{
  font-size: 14px;
  color: $color-default;
  line-height: 40px;
  p{
    height: 40px;
    margin-bottom: 10px;
  }
  margin-bottom: 10px;
  >.child{
    margin-left: 20px;
  }
  .icon-box{
    display: inline-block;
    text-align: center;
    margin-left: 5px;
    width: 17px;
    height: 40px;
  }
  i.icon {
    display: inline-block;
    background-repeat: no-repeat;
    vertical-align: middle;
  }
  .icon.folder {
    /* background-image: url(/src/assets/folder.png); */
    width: 0; 
    height: 0; 
    border-top: 4px solid transparent; 
    border-left: 4px solid $color-default; 
    border-bottom: 4px solid transparent; 
  }
  .icon.folder-open {
    /* background-image: url(/src/assets/folder-open.png); */
    width: 0; 
    height: 0;
    border-left: 4px solid transparent; 
    border-right: 4px solid transparent; 
    border-top: 4px solid $color-default;
  }
  .icon.file-text {
    /* background-image: url(/src/assets/file-text.png); */
    border: none;
  }
}
.parent.act>p{
  border-radius: 5px;
  background-color: #f5f5f5;
  color: $color-info;
}
</style>
