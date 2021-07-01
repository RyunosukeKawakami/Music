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
  

  
  methods:{
    SearchMusic: async function(keyword){
      const response = await fetch("https://api.spotify.com/v1/search?q="+keyword+"&type=album,track&limit=5", {
        headers: {
          Authorization: this.$store.state.accessToken,
        },
        method: "GET"
      });
      const obj = await response.json();
      console.log(obj);
      
      this.$store.commit('setAlbums', obj.albums);
      this.$store.commit('setTracks', obj.tracks);
      this.$store.commit('setKeyword', keyword);
    },
  }
}
</script>

<style>
#searchbox{
  padding-right: 250px;
}
</style>
