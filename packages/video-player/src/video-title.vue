<template>
  <div
    class="pl-video-title"
    :class="{ 'is-show': isShow }"
    v-if="$slots.default"
    @mouseover="showController"
    @mouseleave="hideController"
    @click.stop
  >
    <span class="pl-video-title__content">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PlVideoTitle',
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
.pl-video-title {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #ffffff;
  background: linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
  transition: opacity ease 0.4s;
  opacity: 0;

  &.is-show {
    opacity: 1;
  }
}

.pl-video-title__content {
  display: block;
  padding-left: 20px;
  line-height: 50px;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>