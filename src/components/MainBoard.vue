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
    
    <h3>Album</h3>
    <b-card-group>
      <Album 
        v-for="(track,index) in getAlbums"
        :key="index"
        :index="index"
        :title="track.name"
        :image="track.images[0].url"
        :artist="track.artists[0].name"
        :url="track.external_urls.spotify"
      />
    </b-card-group>
  </div>
</template>

<script>
import Track from './Track.vue'
import Album from './Album.vue'

export default {
  name: 'MainBoard',
  
  components:{
    Track,
    Album,
  },
  
  computed:{
    getKeyword(){
      return this.$store.state.keyword;
    },
    
    getTracks(){
      return this.$store.state.tracks.items;
    },
    
    getAlbums(){
      return this.$store.state.albums.items;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 30px 0px 10px 15px;
}

#track{
  color:#343a40;
}
</style>
