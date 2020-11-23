<template>
  <div
    class="pl-video-controls"
    :class="{ 'is-show': isShow }"
    @mouseover="showController"
    @mouseleave="hideController"
    @click.stop
  >
    <slot></slot>
    <div class="pl-video-controls__buttons">
      <div class="pl-video-controls__buttons--left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="pl-video-controls__buttons--center" v-if="$slots.center">
        <slot name="center"></slot>
      </div>
      <div class="pl-video-controls__buttons--right" v-if="$slots.right">
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlVideoControls',
  props: {
    largeSize: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    showController: {
      type: Function,
      default: () => { }
    },
    hideController: {
      type: Function,
      default: () => { }
    },
    getShowStatus: {
      type: Function,
      default: () => false
    }
  },
  computed: {
    isShow () {
      return this.getShowStatus()
    }
  }
}
</script>

<style lang="less">
.pl-video-controls {
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  transition: opacity ease 0.4s;
  opacity: 0;

  &.is-show {
    opacity: 1;
  }
}

.pl-video-controls__buttons {
  display: flex;
  justify-content: space-between;
  margin: 4px 0;
}

.pl-video-controls__buttons--left,
.pl-video-controls__buttons--center,
.pl-video-controls__buttons--right {
  display: flex;
}
.pl-video-controls__buttons--left {
  margin-left: 5px;
}
.pl-video-controls__buttons--right {
  margin-right: 5px;
}
</style>