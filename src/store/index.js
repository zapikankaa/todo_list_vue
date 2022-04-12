import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: {}
  },
  getters: {
    activeTodos(state) {
      const todos = {}
      for (const id in state.todos) {
        if (!state.todos[id].complete) todos[id] = state.todos[id]
      }
      return todos
    },
    completeTodos(state) {
      const todos = {}
      for (const id in state.todos) {
        if (state.todos[id].complete) todos[id] = state.todos[id]
      }
      return todos
    }
  },
  mutations: {
    initialiseStore(state) {
      if (localStorage.getItem('store')) {
        this.replaceState(Object.assign(state, JSON.parse(localStorage.getItem('store'))))
      }
    },
    addTodo(state, payload) {
      state.todos[payload.id] = payload
    },
    toggleTodoStatus(state, payload) {
      state.todos[payload.id].complete = payload.status
    },
    clearComplete(state) {
      for (const id in state.todos) {
        if (state.todos[id].complete) delete state.todos[id]
      }
    }
  }
})
