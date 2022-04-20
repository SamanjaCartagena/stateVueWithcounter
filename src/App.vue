<template>
  <base-container :textOfTitle="name">
   <h3>{{counter}}</h3>
   <button @click="addOne">Add</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  data(){
   return{
    name:'Samanja'
   }
  },
  components: {
    BaseContainer,
  },
  computed:{
    counter(){
      return this.$store.state.counter;
    }
  },
  methods:{
    addOne(){
       this.$store.state.counter++;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>