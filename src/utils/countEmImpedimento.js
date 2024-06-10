export const countEmImpedimento = (array) => {
  let count = 0;

  array.forEach(element => {
    if (element.status == "Em impedimento") {
      count += 1;
    }
  });

  return count;
}