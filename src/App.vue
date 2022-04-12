<template>
<div class="container">
  <h1>Todo List</h1>
  <header class="header">
    <nav class="nav">
      <router-link class="nav__item" to="/">All {{ allTodosNum ? allTodosNum : '' }}</router-link>
      <router-link class="nav__item" to="active">Active {{ activeTodosNum ? activeTodosNum : '' }}</router-link>
      <router-link class="nav__item" to="complete">Complete {{ completeTodosNum ? completeTodosNum : '' }}</router-link>
    </nav>
    <div class="completeBtn" v-if="completeTodosNum" @click="this.$store.commit('clearComplete')">Clear complete</div>
  </header>
  <router-view/>
</div>
</template>
<script>
export default {
  created() {
    this.$store.commit('initialiseStore')
  },
  computed: {
    allTodosNum() {
      return Object.keys(this.$store.state.todos).length
    },
    activeTodosNum() {
      return Object.keys(this.$store.getters.activeTodos).length
    },
    completeTodosNum() {
      return Object.keys(this.$store.getters.completeTodos).length
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@300;400&display=swap');

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 10px;
}

#app {
  font-family: 'Nunito', sans-serif;
  font-weight: 400;
  color: #2c3e50;
}

h1 {
  font-family: 'Fredoka One', cursive;
  font-weight: 700;
  font-size: 32px;
  text-align: center;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  padding: 30px 0;
}

.nav__item {
  margin-right: 20px;
  padding: 4px 9px;
  border: 3px solid #2c3e50;
  border-radius: 10px;
}

.nav__item:last-child {
  margin-right: 0;
}

.nav__item:hover {
  border-color: #03c0c6;
  color: #03c0c6;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav a.router-link-exact-active {
  border-color: #03c0c6;
  color: #03c0c6;
}

.completeBtn {
  padding: 4px 9px;
  border: 3px solid #03c0c6;
  color: #fff;
  font-weight: 700;
  background-color: #03c0c6;
  border-radius: 10px;
  cursor: pointer;
}

.completeBtn:hover {
  opacity: 0.7;
}

.completeBtn:active {
  opacity: 0.9;
}

@media screen and (max-width: 560px) {
  .header {
    zoom: 0.75;
  }
  .nav__item {
    margin-right: 5px;
  }
}
</style>
