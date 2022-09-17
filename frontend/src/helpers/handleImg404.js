export const handleImg404 = (fallback) => (event) => {
  event.target.onerror = null;
  event.target.src = fallback;
}