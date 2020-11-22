<template>
  <div class="box">
    <pl-video-player :src="src" :currentTime.sync="currentTime">
      <pl-video-title slot="title">海贼王</pl-video-title>
      <pl-video-controls slot="controls" :large-size="false">
        <pl-video-progress></pl-video-progress>
        <template v-slot:left>
          <pl-video-play></pl-video-play>
          <pl-icon-button
            icon="pl-icon-play-next"
            color="#fff"
          ></pl-icon-button>
          <pl-video-time settable></pl-video-time>
        </template>
        <template v-slot:right>
          <pl-video-volume :volume.sync="volume"></pl-video-volume>
          <pl-video-wide-screen></pl-video-wide-screen>
          <pl-video-full-screen></pl-video-full-screen>
        </template>
      </pl-video-controls>
    </pl-video-player>
  </div>
</template>

<script>
import iconButton from '../../packages/button/src/icon-button.vue'
export default {
  components: { iconButton },
  data () {
    return {
      src: 'http://1251316161.vod2.myqcloud.com/29fe1275vodbj1251316161/3566e8395285890810239599188/AXtLkahrWk4A.mp4',
      // src: 'https://gss3.baidu.com/6LZ0ej3k1Qd3ote6lo7D0j9wehsv/tieba-smallvideo/60_8a302ea923de10bac540c08ba361abb1.mp4',
      volume: 0.5,
      currentTime: 60
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.box {
  width: 1280px;
  margin: 0 auto;
}
</style>