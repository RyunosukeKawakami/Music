<template>
  <b-card
    :title= this.title
    :img-src= this.image
    img-height=200
    img-top
    id="track"
    class="mx-3"
  >
    <b-card-text id='title'>
      <p>{{ this.artist }}</p>
    </b-card-text>

    <b-button id="button" @click="PlayMusic">▶︎</b-button>
  </b-card>
</template>

<script>

export default {
  name: 'Track',
  
  props:{
    title:[String],
    artist:[String],
    image:[String],
  },
  
  method:{
    async PlayMusic(){
      const response = await fetch("https://api.spotify.com/v1/me/player/play", {
        body:{
          uris:[
            "spotify:track:0ipvRATjnKeAlIRNS5WqhN"
          ]
        },
        method: "PUT"
      });
    }
  },
  
  commputed:{
    setTrack(){
      return this.$store.state.tracks;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#track{
  color:#343a40; 
  border:none;
  border-radius:4px;
}

#button{
  color:#ffffff;
  background-color:#7119FF;
  padding:10px 30px;
  border:none;
}
</style>
