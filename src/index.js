import Button from '../packages/button/index'
import IconButton from '../packages/icon-button/index'
import Dialog from '../packages/dialog/index'
import VideoPlayer from '../packages/video-player/index'
import VideoTitle from '../packages/video-title/index'
import VideoControls from '../packages/video-controls/index'
import VideoProgress from '../packages/video-progress/index'
import VideoPlay from '../packages/video-play/index'
import VideoVolume from '../packages/video-volume/index'
import VideoTime from '../packages/video-time/index'
import VideoFullScreen from '../packages/video-full-screen/index'
import VideoWideScreen from '../packages/video-wide-screen/index'

import './assets/fonts/icomoon.css'
import './directives/index'

const components = [
  Button,
  IconButton,
  Dialog,
  VideoPlayer,
  VideoTitle,
  VideoControls,
  VideoProgress,
  VideoPlay,
  VideoVolume,
  VideoTime,
  VideoFullScreen,
  VideoWideScreen
]

const install = function(Vue) {
  // 全局注册所有的组件
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// 可按需导入
export default {
  install,
  Button,
  IconButton,
  Dialog,
  VideoPlayer,
  VideoTitle,
  VideoControls,
  VideoProgress,
  VideoPlay,
  VideoVolume,
  VideoTime,
  VideoFullScreen,
  VideoWideScreen
}
