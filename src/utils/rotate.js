const rotate = (array, direction='right', count=1) => {
  return (direction === 'right')
    ? array.slice(count).concat(array.slice(0, count))
    : (direction === 'left')
      ? array.slice(array.length - count, array.length).concat(array.slice(0, array.length - count))
      : array
}

export default rotate
