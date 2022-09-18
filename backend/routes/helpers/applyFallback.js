const defaultFallback = [
  { image:  '/placeholder.png'}
]

const applyFallback = (item, fallbacks = defaultFallback) => {
  return {
    ...item,
    ...fallbacks.reduce((acc, fallback) => {
      const [key] = Object.keys(fallback);
      return {
        ...acc,
        [key]: item[key] || fallback[key]
      }
    , {}})
  }
};

module.exports = {
  applyFallback,
}