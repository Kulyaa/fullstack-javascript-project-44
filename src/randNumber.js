export default (min, max) => {
  const minr = Math.ceil(min);
  const maxr = Math.floor(max);
  return Math.floor(Math.random() * (maxr - minr)) + minr;
};
