export default (min = 0, max = 100) => {
  const minr = Math.ceil(min);
  const maxr = Math.floor(max);
  return Math.floor(Math.random() * (maxr - minr + 1)) + minr;
};
