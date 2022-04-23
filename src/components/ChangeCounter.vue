<template>
  <button @click="addOne">Add 1</button>
  <button @click="inc">Add 2</button>
  <button @click="increase({value:20})">Add 20</button>
</template>

<script>
import {mapActions} from 'vuex';
export default {
   methods:{
      // addOne(){
        //   this.$store.dispatch('increment');
       //}
       //...mapActions(['increment', 'increase'])
       ...mapActions({'numbers'
           inc :'increment',
           increase :'increase'
       })
   }
}
</script>

<style>

</style>