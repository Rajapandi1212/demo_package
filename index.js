const randomNumberGenreator = (min = 1, max = 100) => {
  return Math.round(Math.random() * (max - min) + max);
};
export default randomNumberGenreator;
