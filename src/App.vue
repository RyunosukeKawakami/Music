<template>
  <div id="app">
    <Navbar></Navbar>
    <MainBoard msg="Welcome to Your Vue.js App" id="mainboard"/>
  </div>
</template>

<script>
import MainBoard from './components/MainBoard.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    MainBoard,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}

#mainboard{
  background-color:#6c757d;
  height:1024px;
}

</style>
