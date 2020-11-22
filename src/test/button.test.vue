<template>
  <div class="button-test">
    <div class="box">
      <pl-button>默认样式</pl-button>
      <pl-button type="primary">默认样式</pl-button>
      <pl-button type="success">默认样式</pl-button>
      <pl-button type="info">默认样式</pl-button>
      <pl-button type="warning">默认样式</pl-button>
      <pl-button type="danger">默认样式</pl-button>
    </div>
    <div class="box">
      <pl-button plain @click="handleClick">默认样式</pl-button>
      <pl-button plain @click="handleClick" type="primary">默认样式</pl-button>
      <pl-button plain type="success">默认样式</pl-button>
      <pl-button plain type="info">默认样式</pl-button>
      <pl-button plain type="warning">默认样式</pl-button>
      <pl-button plain type="danger">默认样式</pl-button>
    </div>
    <div class="box">
      <pl-button round>默认样式</pl-button>
      <pl-button round type="primary">默认样式</pl-button>
      <pl-button round type="success">默认样式</pl-button>
      <pl-button round type="info">默认样式</pl-button>
      <pl-button round type="warning">默认样式</pl-button>
      <pl-button round type="danger">默认样式</pl-button>
    </div>
    <div class="box">
      <pl-button disabled>默认样式</pl-button>
      <pl-button disabled type="primary">默认样式</pl-button>
      <pl-button disabled type="success">默认样式</pl-button>
      <pl-button disabled type="info">默认样式</pl-button>
      <pl-button disabled type="warning">默认样式</pl-button>
      <pl-button disabled type="danger">默认样式</pl-button>
    </div>
    <div class="box">
      <pl-button plain round disabled>默认样式</pl-button>
      <pl-button plain round disabled type="primary">默认样式</pl-button>
      <pl-button plain round disabled type="success">默认样式</pl-button>
      <pl-button plain round disabled type="info">默认样式</pl-button>
      <pl-button plain round disabled type="warning">默认样式</pl-button>
      <pl-button plain round disabled type="danger">默认样式</pl-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick (e) {
      console.log(e.target)
    }
  },
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
</style>