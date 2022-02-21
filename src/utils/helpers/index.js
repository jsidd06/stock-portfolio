export const getRandomGraph = (min, max, total) => {
  let series = [];
  for (let i = 0; i < total; i++) {
    series.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return series;
};
