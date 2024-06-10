export const countFechado = (array) => {
  let count = 0;

  array.forEach(element => {
    if (element.status == "Fechado") {
      count += 1;
    }
  });

  return count;
}