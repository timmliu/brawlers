const nextIndex = (array, currentIndex, direction) => {
  if (!direction) return currentIndex
  if (direction === 'left') {
    if (currentIndex <= 0) return array.length - 1
    return currentIndex - 1
  } else if (direction === 'right') {
    if (currentIndex >= array.length - 1) return 0
    return currentIndex + 1
  }
  return currentIndex
}

export default nextIndex
