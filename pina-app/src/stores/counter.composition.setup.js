import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    //state declaration like state function declaration 
    const count = ref(0)
    
    //actions
    function increment() {
        count.value++
    }
    //getters 
    const doubleCount = computed(() => count.value * 2)
    
     //you must return state,actions,getters 
    return { count, doubleCount, increment }
})