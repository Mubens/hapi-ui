<template>
  <button
    class="pl-icon-button"
    v-throttle="[handleClick, throttle]"
    v-if="icon"
  >
    <i :class="icon" :style="{ color }" v-show="!state || !activeIcon"></i>
    <i
      :class="activeIcon"
      :style="{ color: activeColor }"
      v-show="activeIcon && state"
    ></i>
  </button>
</template>

<script>
export default {
  name: 'PlIconButton',
  props: {
    icon: String,
    activeIcon: String,
    color: {
      type: String,
      default: '#000'
    },
    activeColor: {
      type: String,
      default: '#000'
    },
    throttle: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      state: false
    }
  },
  methods: {
    handleClick (e) {
      this.state = !this.state
      this.$emit('click', this.state, e)
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