const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const divElement = document.createElement("div");
  divElement.classList.add("square");

  container.append(divElement);

  if (i % 3 === 0 && i % 5 === 0) {
    divElement.append(`fizzbuzz`);
    divElement.classList.add("fizzbuzz");
  } else if (i % 5 === 0) {
    divElement.append(`buzz`);
    divElement.classList.add("buzz");
  } else if (i % 3 === 0) {
    divElement.append(`fizz`);
    divElement.classList.add("fizz");
  } else divElement.append(i);
}
