const activate = (array, index, key='active') => {
  return array.map((v, i) => {
    v[key] = index === i
    return v
  })
}

export default activate
