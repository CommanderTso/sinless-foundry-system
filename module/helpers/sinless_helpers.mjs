/**
 * @param {number} x
 */
export function sinlessRound(x) {
  if (typeof x === 'number' && x >= 0) {
    return x > 0 && x < 1 ? 1 : Math.floor(x)
  } else if (typeof x === 'number' && x < 0) {
    throw new Error('round() is not designed to handle negative numbers.')
  } else {
    throw new Error('Tried to round() something that was not a number.')
  }
}
