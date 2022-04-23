import {createStore} from 'vuex';
import rootMutations from './mutations';
import rootGetters from './getters';
import rootActions from './actions'
const counterModule ={
    namespaced:true,
   state(){
       return {
         counter:0
       }
   },
   mutations:{
      increment(state){
   
         state.counter = state.counter + 2;
      
       }, 
       increase(state, payload){
           state.counter= state.counter +payload.value;
       },
     

   },
   actions:{ increment(context){
          setTimeout(function(){
                     context.commit('increment');
          },2000)
      },
      increase(context, payload){
          console.log(context);
          context.commit('increase', payload);
      }, 
     
      },
   getters:{  
       testAuth(state){
         return state.IsLoggedIn;
       },
        finalCounter(state){
           return  state.counter * 2;
       },
       normalizedCounter(_, getters){
           const finalCounter = getters.finalCounter;
           if(finalCounter < 0){
               return 0;
           }
           if(finalCounter > 100){
               return 100;
           }
           return finalCounter;
       },
     
    }

}
const store = createStore({
    modules:{
      numbers: counterModule
    },
   state(){
       return {
           counter:0,
           isLoggedIn:false
       }
   },
   mutations:rootMutations,
   actions:rootActions,
   getters:rootGetters,
});

export default store;