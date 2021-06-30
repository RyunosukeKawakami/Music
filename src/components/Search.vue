<template>
  <b-input-group size="sm" id="search">
    <b-input-group-prepend is-text>
      <b-icon icon="search"></b-icon>
    </b-input-group-prepend>
    
    <b-form-input type="search" placeholder="Search music" id="searchbox" @change="SearchMusic($event)"></b-form-input>
  </b-input-group>
</template>

<script>

export default {
  name: 'Search',
  
  data(){
    return{
      clientID:'07e27cb2ce6f456d80d64df6cacfbeef',
      clienetSecret:'cc911f3f4ac2486794f2fcf816b51d16'
    }
  },
  
  methods:{
    SearchMusic: async function(keyword){
      const accessToken = 'Bearer ' + await this.GetAccessToken();
      const response = await fetch("https://api.spotify.com/v1/search?q="+keyword+"&type=album,track&limit=5", {
        headers: {
          Authorization: accessToken,
        },
        method: "GET"
      });
      const obj = await response.json();
      console.log(obj);
      
      this.$store.commit('setAlbums', obj.albums);
      this.$store.commit('setTracks', obj.tracks);
      this.$store.commit('setKeyword', keyword);
    },

    //it gets AccessToken to connect API    
    GetAccessToken: async function(){
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
      
      return obj.access_token;
    }
  }
}
</script>

<style>
#searchbox{
  padding-right: 250px;
}
</style>
