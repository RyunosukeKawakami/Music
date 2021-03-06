import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isTitle:true,
    albums:[],
    tracks:[],
    keyword:'',
    accessToken:'',
    audioDom:[]
  },
  
  mutations: {
    setIsTitle(state, isTitle){
      state.isTitle = isTitle;
    },
    
    setAlbums(state, albums){
      state.albums = albums;
    },
    
    setTracks(state, tracks){
      state.tracks = tracks;
    },
    
    setKeyword(state, keyword){
      state.keyword = keyword;
    },
    
    setAccessToken(state,token){
      state.accessToken = token;
    },
    
    setAudioDom(state, audioDom){
      state.audioDom = audioDom;
    }
  },
})