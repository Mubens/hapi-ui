<template>
  <button class="pl-icon-button" @click="setScreenMode(2)">
    <i
      :class="[isFullScreen ? activeIcon : icon]"
      :style="{ color: isFullScreen ? activeColor : color }"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'PlVideoFullScreen',
  props: {
    icon: {
      type: String,
      default: 'pl-icon-full-screen'
    },
    activeIcon: {
      type: String,
      default: 'pl-icon-full-screen'
    },
    color: {
      type: String,
      default: '#fff'
    },
    activeColor: {
      type: String,
      default: '#fff'
    }
  },
  inject: {
    getPlayer: {
      type: Function,
      default: () => { }
    },
    getScreenMode: {
      type: Function,
      default: () => { }
    },
    setScreenMode: {
      type: Function,
      default: () => { }
    }
  },
  computed: {
    isFullScreen () {
      return this.getScreenMode()
    }
  },
  watch: {
    isFullScreen (flag) {
      if (flag !== 2) {
        this.exitFullScreen()
      } else {
        this.requestFullScreen()
      }
    }
  },
  methods: {
    isFull () {
      return !!(
        document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
      )
    },
    requestFullScreen () {
      if (!this.isFull()) {
        const player = this.getPlayer()
        if (player.requestFullscreen) {
          player.requestFullscreen()
        } else if (player.msRequestFullscreen) {
          player.msRequestFullscreen()
        } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen()
        } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen()
        }
      }
    },
    exitFullScreen () {
      if (this.isFull()) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        }
      }
    },
    fullScreenChange () {
      if (!this.isFull()) {
        this.setScreenMode(0)
      }
    }
  },
  mounted () {
    // 监听全屏事件
    ;['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach((event) => {
      document.addEventListener(event, this.fullScreenChange)
    })
  },
  beforeDestroy () {
    ;['fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange'].forEach((event) => {
      document.removeEventListener(event, this.fullScreenChange)
    })
  }
}
</script>

<style>
</style>
