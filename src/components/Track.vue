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

    
    <audio ref="audio" :src=this.music_url @ended="EndPlayer()"/>
    <div v-if="canPlay">
      <b-button v-show="showPlayer" id="play" @click="PlayerContoroller()">▶︎</b-button>
      <b-button v-show="!showPlayer" id="pause" @click="PlayerContoroller()" variant="outline-secondary"><div id="pause-mark">■</div></b-button>
    </div>
  </b-card>
</template>

<script>

export default {
  name: 'Track',
  
  props:{
    index:[Number],
    title:[String],
    artist:[String],
    image:[String],
    music_url:[String],
  },
  
  data(){
    return{
      showPlayer:true,
      canPlay:true
    }
  },
  
  mounted(){
    this.$root.$on('playerClicked', (index) => {
      const audio = this.$refs.audio;
    
      //押されたのが自分で再生していない場合
      if(index === this.index && this.showPlayer === true){
        this.PlayMusic(audio);
      }
      //押されたのが自分で再生している場合
      else if(index === this.index && this.showPlayer === false){
        this.PauseMusic(audio);
      }
      //押されたのが他の場合は停止
      else if(index !== this.index && audio.paused === false){
        this.PauseMusic(audio);
      }
      
    })
  },
  
  methods:{
    PlayerContoroller(){
      this.$root.$emit('playerClicked',this.index);
    },
    
    PlayMusic(audio){
      this.showPlayer = false;
      audio.play();
    },
    
    PauseMusic(audio){
      this.showPlayer = true;
      audio.pause();
    },
    
    EndPlayer(){
      this.showPlayer = true;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#track{
  color:#343a40; 
  border:none;
  border-radius:4px;
  transition: transform .1s;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .5);
}

#track:hover{
  transform:scale(1.03);
}

#play{
  color:#ffffff;
  background-color:#7119FF;
  padding:10px 30px;
  border:none;
}

#pause{
  padding:4px 30px;
}

#pause-mark{
  font-size:23px;
}
</style>
