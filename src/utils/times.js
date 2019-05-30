const times = (n, fn, context = undefined) => {
  let i = 0
  while (fn.call(context, i) !== false && ++i < n) {}
}

export default times
