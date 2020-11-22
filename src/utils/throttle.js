export default (fn, wait) => {
  let flag = false
  return function() {
    if (flag) return

    fn.apply(this, arguments)
    flag = true

    setTimeout(() => {
      flag = false
    }, wait)
  }
}
