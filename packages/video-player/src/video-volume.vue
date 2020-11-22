<template>
  <button class="pl-video-player__volume pl-icon-button">
    <i
      :class="vol ? icon : muteIcon"
      :style="{ color }"
      @click="handleClick"
    ></i>
    <div class="pl-video-player__volume--body">
      <div class="pl-video-player__volume--num">{{ parseInt(vol * 100) }}</div>
      <div
        class="pl-video-player__volume--bar"
        @mousedown="onMouseDown"
        ref="volume"
      >
        <div class="pl-video-player__volume--bg">
          <div
            class="pl-video-player__volume--progress"
            :style="{ height: vol * 100 + '%' }"
          ></div>
          <!-- top: (0-80%) -->
          <div
            class="pl-video-player__volume--ball"
            :style="{ top: (1 - vol) * 80 + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'PlVideoVolume',
  props: {
    volume: {
      type: Number,
      default: 1
    },
    icon: {
      type: String,
      default: 'pl-icon-volume'
    },
    muteIcon: {
      type: String,
      default: 'pl-icon-mute'
    },
    color: {
      type: String,
      default: '#fff'
    }
  },
  inject: {
    getVideo: {
      type: Function,
      default: () => { }
    }
  },
  data () {
    return {
      vol: 0,
      dragging: false,
      lastVol: 0
    }
  },
  methods: {
    onMouseDown (e) {
      const video = this.getVideo()
      const boundingClientRect = this.$refs.volume.getBoundingClientRect()
      let volume = 1 - (e.pageY - boundingClientRect.top) / boundingClientRect.height

      if (volume < 0) {
        volume = 0
      } else if (volume > 1) {
        volume = 1
      }
      video.muted = false
      video.volume = this.vol = volume
      this.dragging = true
    },
    onMouseMove (e) {
      if (this.dragging) {
        this.onMouseDown(e)
        // 解决拖动时选中页面中的文本
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
      }
    },
    onMouseUp () {
      this.$emit('click', this.vol)
      this.dragging = false
    },
    getVolume () {
      this.getVideo().volume = this.vol = this.volume
    },
    handleClick () {
      const video = this.getVideo()
      if (this.vol !== 0) {
        this.lastVol = this.vol
        video.volume = this.vol = 0
      } else {
        video.volume = this.vol = this.lastVol
      }
      this.$emit('click', this.vol)
    }
  },
  mounted () {
    this.getVolume()
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
  },
  beforeDestroy () {
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
  }
}
</script>

<style lang="less">
.pl-video-player__volume {
  position: relative;

  &:hover .pl-video-player__volume--body {
    visibility: visible;
  }
}

.pl-video-player__volume--body {
  position: absolute;
  top: -120px;
  left: 50%;
  width: 30px;
  height: 97px;
  background: rgba(34, 34, 34, 0.8);
  border-radius: 2px;
  transform: translateX(-50%);
  transition: all 0.3s linear;
  cursor: default;
  visibility: hidden;
}

.pl-video-player__volume--num {
  width: 100%;
  height: 26px;
  line-height: 24px;
  font-size: 13px;
  color: #ffffff;
}

.pl-video-player__volume--bar {
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 60px;
  border-radius: 2px;
  cursor: pointer;
}

.pl-video-player__volume--bg {
  position: relative;
  width: 2px;
  height: 60px;
  margin-bottom: 6px;
  background-color: #ffffff;
}

.pl-video-player__volume--progress {
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ff6b6b;
}

.pl-video-player__volume--ball {
  position: relative;
  left: 50%;
  width: 12px;
  height: 12px;
  background-color: #ff6b6b;
  border-radius: 50%;
  transform: translateX(-50%);
}
</style>
