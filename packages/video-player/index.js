import PlVideoPlayer from './src/video-player.vue'

PlVideoPlayer.install = function(Vue) {
  Vue.component(PlVideoPlayer.name, PlVideoPlayer)
}

export default PlVideoPlayer
