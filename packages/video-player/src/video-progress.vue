<template>
  <div
    class="pl-video-player__progress"
    @mousedown="onMouseDown"
    ref="progress"
  >
    <div class="pl-video-player__progress--body">
      <span
        class="pl-video-player__progress--buffer"
        :style="{ width: buffer + '%', backgroundColor: bufferColor }"
      ></span>
      <span
        class="pl-video-player__progress--current"
        :style="{
          width: 100 + '%',
          transform: `scaleX(${percent / 100})`,
          backgroundColor: color,
        }"
      ></span>
    </div>
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'PlVideoProgress',
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#ff6b6b'
    },
    bufferColor: {
      type: String,
      default: '#7c7c7c'
    },

  },
  inject: ['getVideo'],
  data () {
    return {
      // 拖拽标志位
      dragging: false,
      // 拖拽进度（%）
      percent: 0,
      buffer: 0
    }
  },
  methods: {
    /* 鼠标按下 点击进度条 */
    onMouseDown (e) {
      const progress = this.$refs.progress.getBoundingClientRect()
      this.percent = ((e.clientX - progress.left) / progress.width) * 100

      this.dragging = true
    },
    /* 鼠标移动 滚动进度条 */
    onMouseMove (e) {
      if (!this.dragging) return
      const progress = this.$refs.progress
      let width = e.clientX - progress.getBoundingClientRect().left

      if (width < 0) width = 0
      if (width > progress.offsetWidth) width = progress.offsetWidth

      this.percent = (width / progress.offsetWidth) * 100

      // 解决拖动时选中页面中的文本
      window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
    },
    /* 鼠标抬起 设置时间 */
    onMouseUp () {
      if (!this.dragging) return
      const video = this.getVideo()
      this.dragging = false
      video.currentTime = (this.percent / 100) * video.duration
      video.paused && video.play()
    },
    /* 进度条自动跟随 */
    autoFollow () {
      if (this.dragging) return
      // 进度值 = 100 * 当前时间（s）/ 视频持续时间（s）
      this.percent = 100 * (this.getVideo().currentTime / this.getVideo().duration)
    }
  },
  mounted () {
    // 监听视频播放位置的改变
    this.getVideo().addEventListener('timeupdate', this.autoFollow)
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('mouseup', this.onMouseUp)
  },
  beforeDestroy () {
    this.getVideo()?.removeEventListener('timeupdate', this.autoFollow)
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('mouseup', this.onMouseUp)
  }
}
</script>

<style lang="less">
.pl-video-player__progress {
  position: relative;
  width: 98%;
  height: 10px;
  box-sizing: border-box;
  margin: 0 1%;

  cursor: pointer;
}

.pl-video-player__progress--body {
  position: relative;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  transform: translateY(-50%);
  border-radius: 3px;
  background-color: #7c7d824d;
  overflow: hidden;
  z-index: 1;
}

.pl-video-player__progress:hover .pl-video-player__progress--body {
  height: 4px;
}

.pl-video-player__progress--buffer {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 3;
  background-color: #7c7c7c;
}

.pl-video-player__progress--current {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  z-index: 3;
  background-color: #ff6b6b;
  transform-origin: left center;
}

.pl-video-player__progress-preview {
  position: absolute;
  top: 50%;
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
  z-index: 9;
}

.pl-video-player__progress-preview::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9;
}

.progress-preview {
  position: absolute;
  height: 100%;
  display: none;
}

.progress-preview.show {
  display: block;
}

.preview-sign {
  position: absolute;
  height: 100%;
}

.preview-sign::before {
  position: absolute;
  top: -4px;
  content: "";
  border-top: 5px solid #ff6b6b;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  transform: translateX(-50%);
}

.preview-sign::after {
  position: absolute;
  bottom: -4px;
  content: "";
  border-left: 4px solid transparent;
  border-bottom: 5px solid #ff6b6b;
  border-right: 4px solid transparent;
  transform: translateX(-50%);
}

.preview-info {
  position: absolute;
  width: 160px;
  height: 90px;
  left: 50%;
  bottom: 50%;
  color: #ffffff;
  transform: translate(-50%, -15%);

  background-color: skyblue;
}

.preview-info img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.preview-info span {
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 2px 4px;
  font-size: 12px;
  border-radius: 2px;
  background-color: #1c1a19ee;
  transform: translateX(-50%);
}
</style>
