<template>
  <div>
    <input type="text" :value="value" @input="handleInput" />
  </div>
</template>

<script>
export default {
  name: 'HpDialog',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style scoped>
</style>