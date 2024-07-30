export const countEmAtendimento = (array) => {
  let count = 0;

  array.forEach(element => {
    if (element.status == "Em atendimento") {
      count += 1;
    }
  });

  return count;
}