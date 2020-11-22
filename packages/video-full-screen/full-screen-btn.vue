<template>
  <button class="pl-icon-button" @click="fullScreen">
    <i class="pl-icon-full-screen"></i>
  </button>
</template>

<script>
export default {
  name: 'PlVideoFullScreen',
  inject: {
    getPlayer: {
      type: Function,
      default: () => { }
    },
    setScreenMode: {
      type: Function,
      default: () => { }
    }
  },
  methods: {
    fullScreen () {
      const isFull = !!(
        document.fullscreen ||
        document.mozFullScreen ||
        document.webkitIsFullScreen ||
        document.webkitFullScreen ||
        document.msFullScreen
      )

      if (isFull) {
        // console.log('退出全屏')
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen()
        }
      } else {
        // console.log('全屏')
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
    fullScreenChange () {
      // this.$emit('click', 'full-screen')
      this.setScreenMode(2)
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
.en-video-player-ctrl-btn.full-screen-btn svg {
  transform: scale(1.3, 1.3);
}
</style>
