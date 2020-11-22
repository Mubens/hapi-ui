import Vue from 'vue'

import throttle from '../utils/throttle'

Vue.directive('throttle', {
  bind(el, binding) {
    const [func = () => {}, wait = 0] = binding.value
    el.addEventListener('click', throttle(func, wait))
  }
})
