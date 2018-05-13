<template>
  <div :class="wrapClass">

  </div>
</template>

<script>
export default {
  props: ['type'],
  data(){
    return{

    }
  },
  computed: {
    wrapClass(){
      return type === 'vertical' ? 'wrap' : 'wrap vertical';
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap{
  display: flex;
  
}
</style>


