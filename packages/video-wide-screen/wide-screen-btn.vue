<template>
  <button class="pl-icon-button" @click="setScreenMode(1)">
    <i
      :class="[isWideScreen ? activeIcon : icon]"
      :style="{ color: isWideScreen ? activeColor : color }"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'PlVideoWideScreen',
  props: {
    icon: {
      type: String,
      default: 'pl-icon-webfull-on'
    },
    activeIcon: {
      type: String,
      default: 'pl-icon-webfull-off'
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
    isWideScreen () {
      return this.getScreenMode() === 1
    }
  },
  watch: {
    isWideScreen (flag) {
      document.body.style.overflow = flag ? 'hidden' : ''
    }
  }
}
</script>

<style lang="less">
</style>