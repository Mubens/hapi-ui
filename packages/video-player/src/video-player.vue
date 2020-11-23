<template>
  <div
    class="pl-video-player"
    tabindex="-1"
    @keydown.space.prevent="playOrPause"
    @keydown.esc="setScreenMode(0)"
    @click="playOrPause"
    @mousemove="mouseMove"
    @mouseleave="mouseLeave"
  >
    <div
      class="pl-video-player__body"
      :class="{
        'full-web-page': screenMode === 1,
        'large-size': screenMode === 1 || screenMode === 2,
      }"
      ref="player"
    >
      <video
        class="pl-video-player__video"
        :src="src"
        :controls="controls"
        :autoplay="autoplay"
        :muted="muted"
        :loop="loop"
        ref="video"
      ></video>
      <slot name="title"></slot>
      <slot name="controls"></slot>
    </div>
  </div>
</template>

<script>

const SCREEN_MODE = ['default', 'full-web-page', 'full-screen', 'user-defined']
/* 
1. 
  player mousemove
  title/control !mouseover
  过1s消失
2.
  player mouseleave
  title/control mouseover
  一直显示
3.
  title/control mouseleave
  player mouseleave
  消失
4. 
  title/control mouseleave
  player mousemove
  过1s消失
*/
export default {
  name: 'PlVideoPlayer',
  props: {
    src: String,
    controls: Boolean,
    autoplay: Boolean,
    muted: Boolean,
    loop: Boolean,
    currentTime: {
      type: Number,
      default: 0
    }
  },
  provide () {
    return {
      getVideo: this.getVideo,
      getPlayer: this.getPlayer,
      showController: () => {
        this.isShow = true
      },
      hideController: () => {
        this.isShow = false
      },
      getShowStatus: () => this.timeShow || this.isShow,
      setScreenMode: this.setScreenMode,
      getScreenMode: () => this.screenMode
    }
  },
  data () {
    return {
      timeShow: false,
      isShow: false,
      timer: null,
      screenMode: 0
    }
  },
  methods: {
    setScreenMode (state) {
      if (state == null) return
      // console.log(this.screenMode, state)
      if (this.screenMode === state) {
        this.screenMode = 0
      } else {
        this.screenMode = state
      }
    },
    /* 视频播放/暂停 */
    playOrPause () {
      const video = this.$refs.video
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    },
    getVideo () {
      return this.$refs.video
    },
    getPlayer () {
      return this.$refs.player
    },
    getDurdation () {
      return this.$refs.video.duration
    },
    waitingBuffer () { },
    videoEnded () { },
    // 显示控制器
    mouseMove () {
      this.timeShow = true
      this.timer && clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.timeShow = false
      }, 600)
    },
    // 隐藏控制器
    mouseLeave () {
      this.timer && clearTimeout(this.timer)
      this.timeShow = false
    }
  },
  mounted () {
    const video = this.$refs.video
    // 视频已准备好开始播放
    video.currentTime = this.currentTime
    video.addEventListener('canplay', this.getDurdation)

    // 监听视频加载
    video.addEventListener('waiting', this.waitingBuffer)
    // 视频播放结束
    video.addEventListener('ended', this.videoEnded)
  },
  beforeDestroy () {
    const video = this.$refs.video
    video.removeEventListener('canplay', this.getDurdation)
    video.removeEventListener('waiting', this.waitingBuffer)
    video.removeEventListener('ended', this.videoEnded)
  }
}
</script>

<style lang="less">
.pl-video-player {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  outline: none;
}

.pl-video-player__body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;

  &.full-web-page {
    position: fixed;
    width: 100vw;
    height: 100vh;
  }

  &.large-size {
    .pl-icon-button {
      font-size: 26px;
      margin: 0 10px;
    }
    .pl-video-controls__buttons {
      margin: 10px 0;
    }

    .pl-video-time {
      height: 26px;
      line-height: 30px;
    }

    .pl-video-time__set {
      height: 28px;
      width: 82px;
    }
  }
}

.pl-video-player__video {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>