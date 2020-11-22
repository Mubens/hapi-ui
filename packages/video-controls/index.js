import PlVideoControls from '../video-player/src/video-controls.vue'

PlVideoControls.install = function(Vue) {
  Vue.component(PlVideoControls.name, PlVideoControls)
}

export default PlVideoControls
