<template>
  <div class="todo-list">
    <input
      v-model="text"
      class="new"
      :class="{ empty: isTextEmpty }"
      type="text"
      @keyup.enter="createTodo"
      @input="isTextEmpty = false"
      @blur="isTextEmpty = false"
      placeholder="Type and press Enter"
      autofocus>
    <todo-item
      v-bind:key="id"
      v-for="item, id in todos"
      :text="item.text"
      :id="id"
      :complete="item.complete"></todo-item>
    <div class="placeholder" v-if="!Object.keys(todos).length">There is nothing to show yet(</div>
  </div>
</template>
<script>
import TodoItem from '@/components/TodoItem'

import { v4 as uuidv4 } from 'uuid'

export default {
  components: {
    TodoItem
  },
  props: {
    filter: String
  },
  data() {
    return {
      text: '',
      isTextEmpty: false
    }
  },
  methods: {
    createTodo() {
      if (this.text === '') {
        this.isTextEmpty = true
        return
      }
      const newTodo = {}
      newTodo.id = uuidv4()
      newTodo.text = this.text
      newTodo.complete = false
      this.$store.commit('addTodo', newTodo)

      this.text = ''
    }
  },
  computed: {
    todos() {
      if (this.filter === 'active') {
        return this.$store.getters.activeTodos
      } else if (this.filter === 'complete') {
        return this.$store.getters.completeTodos
      } else return this.$store.state.todos
    }
  }
}
</script>
<style scoped>
.todo-list {
  width: 100%;
}

.new {
  padding: 15px;
  font-size: 25px;
  border: 5px solid transparent;
  border-radius: 5px;
  width: 100%;
  color: #2c3e50;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.new.empty,
.new.empty:hover,
.new.empty:focus-visible {
  background-color: rgba(205, 92, 92, 0.473);
}

.new:hover {
  background-color: aliceblue;
}

.new:focus-visible {
  background-color: aliceblue;
  outline: none;
}

.placeholder {
  font-weight: 300;
  font-size: 30px;
  text-align: center;
  padding: 30px;
  opacity: 0.5;
}

@media screen and (max-width: 560px) {
  .new {
    font-size: 18px;
  }
}
</style>