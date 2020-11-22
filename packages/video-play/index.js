import PlVideoPlay from '../video-player/src/video-play.vue'

PlVideoPlay.install = function(Vue) {
  Vue.component(PlVideoPlay.name, PlVideoPlay)
}

export default PlVideoPlay
