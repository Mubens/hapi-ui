<template>
  <button class="pl-icon-button" v-throttle="[handleClick, throttle]">
    <i :class="paused ? playIcon : pasueIcon" :style="{ color }"></i>
  </button>
</template>

<script>
export default {
  name: 'PlVideoPlay',
  inject: {
    getVideo: {
      type: Function,
      default: () => { }
    }
  },
  props: {
    playIcon: {
      type: String,
      default: 'pl-icon-play'
    },
    pasueIcon: {
      type: String,
      default: 'pl-icon-pause'
    },
    color: {
      type: String,
      default: '#fff'
    },
    throttle: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      paused: false
    }
  },
  methods: {
    handleClick (e) {
      const video = this.getVideo()
      if (video.paused) {
        video.play()
      } else {
        video.pause()
      }
    }
  },
  mounted () {
    const video = this.getVideo()
    if (video) {
      this.paused = video.paused
      video.addEventListener('pause', (e) => {
        this.paused = true
        this.$emit('click', this.paused, e)
      })

      video.addEventListener('play', (e) => {
        this.paused = false
        this.$emit('click', this.paused, e)
      })
    }
  }
}
</script>

<style>
.pl-icon-button {
  width: 26px;
  height: 26px;
  padding: 1px;
  margin: 0 5px;
  outline: none;
  border: none;
  font-size: 24px;
  background-color: transparent;
  cursor: pointer;
}
</style>