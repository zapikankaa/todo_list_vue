<template>
  <div class="todo-item" :class="{ complete: complete }" @click="toggleTodoStatus">
    <div class="todo-item__status"></div>
    <p class="todo-item__text">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: {
    id: String,
    text: String,
    complete: Boolean
  },
  methods: {
    toggleTodoStatus() {
      this.$store.commit('toggleTodoStatus', { id: this.id, status: !this.complete })
    }
  }
}
</script>
<style scoped>
.todo-item {
  width: 100%;
  padding: 8px 15px;
  padding-left: 10px;
  display: flex;
  border-radius: 5px;
}

.todo-item:hover {
  background-color: floralwhite;
}

.todo-item:hover .todo-item__status {
  transition: background-image 0.3s ease;
  background: url('../assets/check-circle-outline.svg') center / cover;
  opacity: 0.5;
}

.todo-item__status {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.todo-item__text {
  font-size: 22px;
  margin: 0;
  width: 100%;
}

.todo-item.complete {
  opacity: 0.5;
}

.todo-item.complete:hover {
  background-color: rgba(211, 211, 211, 0.5);
}

.todo-item.complete:hover .todo-item__status {
  background: url('../assets/check-circle.svg') center / cover;
}

.todo-item.complete .todo-item__text {
  text-decoration: line-through;
  font-weight: 300;
}

</style>