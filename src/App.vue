<template>
  <div id="app">
    <com-test />
  </div>
</template>

<script>
// import ComTest from './test/button.test'
// import ComTest from './test/dialog.test'
import ComTest from './test/video.test'

export default {
  name: 'App',
  components: {
    'com-test': ComTest
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>