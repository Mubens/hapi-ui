<template>
  <button class="pl-icon-button" @click="handleClick">
    <i
      :class="[isWideScreen ? activeIcon : icon]"
      :style="{ color }"
      @click="handleClick"
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
  methods: {
    handleClick () {
      this.setScreenMode(1)
    }
  }
}
</script>

<style scoped>
</style>