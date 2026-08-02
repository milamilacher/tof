const preguntasMatematicas = [
  { q: "Un triángulo tiene 3 lados.", a: true },
  { q: "Un cuadrado tiene 5 lados.", a: false },
  { q: "El número 10 es un número par.", a: true },
  { q: "Una docena equivale a 12 unidades.", a: true },
  { q: "Si a 5 le restas 5, te quedan 2.", a: false },
  { q: "El número 15 es mayor que 20.", a: false },
  { q: "Un círculo tiene esquinas puntudas.", a: false },
  { q: "La mitad de 8 es 4.", a: true },
  { q: "100 es mayor que 99.", a: true },
  { q: "Un rectángulo tiene 4 lados.", a: true }
];

// Generar dinámicamente más de 1000 preguntas adicionales
for (let i = 1; i <= 1000; i++) {
  const type = Math.floor(Math.random() * 3);
  let numA, numB, correctResult, isTrue, displayResult, qText;

  if (type === 0) { // Suma
    numA = Math.floor(Math.random() * 20) + 1;
    numB = Math.floor(Math.random() * 20) + 1;
    correctResult = numA + numB;
    isTrue = Math.random() > 0.5;
    displayResult = isTrue ? correctResult : correctResult + (Math.random() > 0.5 ? 2 : -1);
    qText = `¿La suma de ${numA} + ${numB} es igual a ${displayResult}?`;
  } else if (type === 1) { // Resta
    numA = Math.floor(Math.random() * 20) + 10;
    numB = Math.floor(Math.random() * numA) + 1;
    correctResult = numA - numB;
    isTrue = Math.random() > 0.5;
    displayResult = isTrue ? correctResult : Math.max(0, correctResult + (Math.random() > 0.5 ? 1 : -1));
    qText = `¿Si a ${numA} le restas ${numB}, el resultado es ${displayResult}?`;
  } else { // Multiplicación sencilla
    numA = Math.floor(Math.random() * 10) + 1;
    numB = Math.floor(Math.random() * 10) + 1;
    correctResult = numA * numB;
    isTrue = Math.random() > 0.5;
    displayResult = isTrue ? correctResult : correctResult + (Math.random() > 0.5 ? 3 : -2);
    qText = `¿La multiplicación de ${numA} x ${numB} es ${displayResult}?`;
  }

  preguntasMatematicas.push({ q: qText, a: isTrue });
}