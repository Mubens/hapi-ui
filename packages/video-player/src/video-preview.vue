<template>
  <div
    class="pl-video-player__progress-preview"
    @mouseover.self="onProgressOver"
    @mousemove.self="onProgressMove"
    @mouseout.self="onProgressOut"
  >
    <div class="progress-preview" :class="{ show: visible }">
      <div class="preview-sign" :style="{ left: signLeft + 'px' }"></div>
      <div class="preview-info" :style="{ left: infoLeft + 'px' }" ref="info">
        <img src alt />
        <span>{{ infoTime | timeFormat }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlVideoPreview',
  data () {
    return {
      visible: false,
      signLeft: 0,
      infoLeft: 0,
      infoTime: 0
    }
  },
  methods: {
    onProgressOver () {
      this.hovering = true
      this.timer = setTimeout(() => {
        this.visible = true
      }, 100)
    },
    onProgressMove (e) {
      if (this.hovering) {
        const progress = this.$refs.progress

        const minOffsetX = this.$refs.info.clientWidth / 2
        const maxOffsetX = e.target.clientWidth - this.$refs.info.clientWidth / 2

        if (e.offsetX > maxOffsetX) {
          this.infoLeft = maxOffsetX
        } else if (e.offsetX < minOffsetX) {
          this.infoLeft = minOffsetX
        } else {
          this.infoLeft = e.offsetX
        }

        this.signLeft = (e.offsetX / progress.offsetWidth) * progress.offsetWidth
        this.infoTime = this.getVideo().duration * (e.offsetX / progress.offsetWidth)
      }
    },
    onProgressOut () {
      clearTimeout(this.timer)
      this.hovering = false
      this.visible = false
    }
  },
  filters: {
    timeFormat (seconds) {
      const m = Math.floor(seconds / 60) + ''
      const s = Math.floor(seconds % 60) + ''
      return m.padStart(2, 0) + ':' + s.padStart(2, 0)
    }
  }
}
</script>

<style scoped>
</style>