import PlVideoProgress from '../video-player/src/video-progress.vue'

PlVideoProgress.install = function(Vue) {
  Vue.component(PlVideoProgress.name, PlVideoProgress)
}

export default PlVideoProgress
