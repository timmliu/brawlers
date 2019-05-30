import rotate from './rotate'

const rotateToCenter = ({ array=[], id }) => {
  const centerIndex = Math.floor(array.length / 2)
  const matchIndex = array.findIndex(b => b.id === id)

  if (!~matchIndex) return array
  const itemToCenter = array[matchIndex]

  while (centerIndex !== array.findIndex(b => b.id === itemToCenter.id)) {
    array = rotate(array)
  }

  return array
}


export default rotateToCenter
