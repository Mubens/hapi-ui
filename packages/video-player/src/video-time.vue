<template>
  <div class="pl-video-time">
    <input
      class="pl-video-time__set"
      type="text"
      v-if="settable && setting"
      :value="time | timeFormat"
      @blur="setTime"
      ref="input"
    />
    <div class="pl-video-time__info" v-else @click="inputFocus">
      <span>{{ currentTime || "0" | timeFormat }}</span>
      <span class="time-split">/</span>
      <span>{{ duration || "0" | timeFormat }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlVideoTime',
  props: {
    settable: Boolean
  },
  data () {
    return {
      setting: false,
      time: 0,
      currentTime: 0,
      duration: 0
    }
  },
  inject: {
    getVideo: {
      type: Function,
      default: () => { }
    }
  },
  methods: {
    inputFocus () {
      if (!this.settable) return

      this.setting = true
      this.$nextTick(() => {
        this.time = this.getVideo().currentTime
        this.$refs.input.focus()
      })
    },
    setTime (e) {
      const video = this.getVideo()
      const times = e.target.value.split(':').reverse()

      let time = 0
      for (let i = 0; i < times.length; i++) {
        time += +times[i] * 60 ** i
      }

      if (time < 0) {
        time = 0
      }

      if (time > video.duration) {
        time = video.duration
      }

      if (Math.ceil(this.time) < Math.round(time) || Math.floor(this.time) > Math.round(time)) {
        video.currentTime = time
      }

      this.setting = false
    },
    timeUpdate () {
      this.currentTime = this.getVideo().currentTime
    },
    getDuration () {
      this.duration = this.getVideo().duration
    }
  },
  filters: {
    timeFormat (seconds) {
      const minite = Math.floor(seconds / 60) + ''
      const second = Math.floor(seconds % 60) + ''
      return minite.padStart(2, '0') + ':' + second.padStart(2, '0')
    }
  },
  mounted () {
    const video = this.getVideo()
    if (video) {
      video.addEventListener('timeupdate', this.timeUpdate)
      video.addEventListener('canplay', this.getDuration)
    }
  },
  beforeDestroy () {
    const video = this.getVideo()
    if (video) {
      video.removeEventListener('timeupdate', this.timeUpdate)
      video.removeEventListener('canplay', this.getDuration)
    }
  }
}
</script>

<style>
.pl-video-time {
  height: 25px;
  line-height: 25px;
  min-width: 84px;
  margin: 0 5px;
  text-align: center;
  color: #ffffff;
}

.pl-video-time__set {
  display: inline-block;
  box-sizing: border-box;
  height: 22px;
  width: 64px;
  margin: 1px auto;
  padding-top: 2px;
  border-radius: 2px;
  line-height: 22px;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
  outline: none;
  border: none;
}

.pl-video-time__info {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0 4px;
  font-size: 13px;
  cursor: pointer;
}

.pl-video-time__info .time-split {
  padding: 0 4px;
}
</style>
