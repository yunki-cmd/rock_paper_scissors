import {
  createStore
} from 'vuex'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      score: 0
    }
  },
  mutations: {
    increment(state) {
      state.score++
    },
    decrement(state) {
      state.score --
    }
  }
})

export default store