import { defineStore } from 'pinia'

//options api style pattern:

export const useCounterStore = defineStore('counter', {
  //state
  state: () => {
      //return inital state
      return {
          count: 10
      }
  },
  //actions
  actions: {
      increment() {
          this.count++
      }
  },
  //getters (computed Properties)
  getters: {
      doubleIt: state => state.count * 2
  }
})