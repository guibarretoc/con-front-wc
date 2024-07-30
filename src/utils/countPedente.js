export const countPedente = (array) => {
  let count = 0;

  array.forEach(element => {
    if (element.status == "Pendente") {
      count += 1;
    }
  });

  return count;
}