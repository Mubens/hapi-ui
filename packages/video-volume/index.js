import PlVideoVolume from '../video-player/src/video-volume.vue'

PlVideoVolume.install = function(Vue) {
  Vue.component(PlVideoVolume.name, PlVideoVolume)
}

export default PlVideoVolume
