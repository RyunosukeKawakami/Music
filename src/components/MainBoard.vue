<template>
  <div>
    <h2>「{{ getKeyword }}」の検索結果</h2>
    <h3>Song</h3>
    <b-card-group>
      <Track 
        v-for="(track,index) in getTracks"
        :key="index"
        :index="index"
        :title="track.name"
        :image="track.album.images[0].url"
        :artist="track.artists[0].name"
        :music_url="track.preview_url"
        @playerButton="ChangePlayingnow($event)"
      />
    </b-card-group>
  </div>
</template>

<script>
import Track from './Track.vue'

export default {
  name: 'MainBoard',
  
  components:{
    Track,
  },
  
  data(){
    return{
      track: [],
    }
  },
  
  computed:{
    getKeyword(){
      return this.$store.state.keyword;
    },
    
    getTracks(){
      return this.$store.state.tracks.items;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#track{
  color:#343a40;
}
</style>
