<template>
  <div id="app">
    <Navbar></Navbar>
    
    <Title v-if=this.setIsTitle id="app-title"></Title>
    <MainBoard v-else msg="Welcome to Your Vue.js App" id="mainboard"/>
    
  </div>
</template>

<script>
import MainBoard from './components/MainBoard.vue'
import Title from './components/Title.vue'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    MainBoard,
    Title,
    Navbar,
  },
  
  data(){
    return{
      clientID:'07e27cb2ce6f456d80d64df6cacfbeef',
      clienetSecret:'cc911f3f4ac2486794f2fcf816b51d16'
    }
  },
  
  //get AccessToken to connect Spotifya API
  async created(){
    const rawClientCredential = this.clientID + ':' + this.clienetSecret;
    const clientCredential = "Basic " + btoa(rawClientCredential);
    const response = await fetch("https://accounts.spotify.com/api/token", {
      body: "grant_type=client_credentials",
      headers: {
        Authorization: clientCredential,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    });
    const obj = await response.json();
    this.$store.commit('setAccessToken','Bearer ' + obj.access_token);
  },
  
  computed:{
    setIsTitle(){
      return this.$store.state.isTitle;
    }
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

#app-title{
  background-color:#6c757d;
  height:1024px;
}

</style>
