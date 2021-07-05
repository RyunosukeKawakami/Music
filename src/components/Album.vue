<template>
  <b-card
    :title= this.title
    :img-src= this.image
    img-height=200
    img-top
    id="album"
    class="mx-3"
  >
    <b-card-text id='title'>
      <p>{{ this.artist }}</p>
    </b-card-text>

    <b-button :href=this.url id="button" >︎INFO</b-button>
  </b-card>
</template>

<script>

export default {
  name: 'Album',
  
  props:{
    index:[Number],
    title:[String],
    artist:[String],
    image:[String],
    url:[String],
  },
  
  commputed:{
    setAlbum(){
      return this.$store.state.albums;
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#album{
  color:#343a40; 
  border:none;
  border-radius:4px;
}

#button{
  color:#ffffff;
  padding:10px 30px;
  border:none;
}
</style>
