import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    albums:[],
    tracks:[],
    keyword:''
  },
  
  mutations: {
    setAlbums(state, albums){
      state.albums = albums;
    },
    
    setTracks(state, tracks){
      state.tracks = tracks;
    },
    
    setKeyword(state, keyword){
      state.keyword = keyword;
    }
  },
  
  actions: {
    saveKeyword(context, keyword){
      context.commit('setKeyword',keyword);
    }
  }
})