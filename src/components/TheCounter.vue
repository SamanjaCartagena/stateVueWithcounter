<template>
    <h3>{{counter}}</h3>
</template>
<script>
export default{
    computed:{
    counter(){
      return this.$store.state.getters.finalCounter;
    }
  },
}
</script>
<style scoped>

</style>