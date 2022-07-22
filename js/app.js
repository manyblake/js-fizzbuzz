const body = document.querySelector("body");

for (let i = 1; i < 99; i++) {
  const divElement = document.createElement("div");

  body.append(divElement);

  if (i % 3 === 0) {
    divElement.append(`fizz`);
  } else if (i % 5 === 0) {
    divElement.append(`buzz`);
  } else if (i % 3 === 0 && i % 5 === 0) {
    divElement.append(`fizzbuzz`);
  } else divElement.append(i);
}
