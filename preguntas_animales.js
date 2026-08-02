const preguntasAnimales = [
  { q: "Los perros pertenecen al grupo de los mamíferos.", a: true },
  { q: "Los peces respiran oxígeno del aire con pulmones.", a: false },
  { q: "Las arañas tienen 8 patas.", a: true },
  { q: "Las serpientes tienen patas largas para correr rápido.", a: false },
  { q: "Los pingüinos son aves que saben volar en el cielo.", a: false },
  { q: "Las vacas son animales herbívoros porque comen hierba.", a: true },
  { q: "Los delfines son mamíferos acuáticos.", a: true },
  { q: "Los canguros llevan a sus crías en una bolsa en su panza.", a: true },
  { q: "Los cocodrilos son reptiles que nacen de huevos.", a: true },
  { q: "Los gatos son carnívoros por naturaleza.", a: true },
  { q: "Las hormigas pueden levantar objetos más pesados que ellas.", a: true },
  { q: "Los camaleones pueden cambiar de color para camuflarse.", a: true },
  { q: "Las ballenas azules son los animales más grandes del planeta.", a: true },
  { q: "Los leones viven en el Polo Norte entre la nieve.", a: false },
  { q: "Los murciélagos son los únicos mamíferos capaces de volar.", a: true },
  { q: "Las abejas producen deliciosa miel en sus colmenas.", a: true },
  { q: "Los osos polares tienen la piel de color rosado.", a: false },
  { q: "Los sapos y ranas son animales anfibios.", a: true },
  { q: "Las jirafas tienen el cuello corto.", a: false },
  { q: "Los tiburones son peces con esqueletos de cartílago.", a: true }
];

const animalesLista = ["el perro", "el gato", "el león", "el elefante", "el tigre", "el caballo", "la vaca", "el conejo", "el águila", "el delfín", "el oso", "el zorro", "el lobo", "el mono", "la cebra"];
const rasgosLista = [
  { t: "tiene plumas para volar", trueFor: ["el águila"] },
  { t: "tiene 4 patas", trueFor: ["el perro", "el gato", "el león", "el elefante", "el tigre", "el caballo", "la vaca", "el conejo", "el oso", "el zorro", "el lobo", "el mono", "la cebra"] },
  { t: "nace de un huevo", trueFor: ["el águila"] },
  { t: "es un mamífero", trueFor: ["el perro", "el gato", "el león", "el elefante", "el tigre", "el caballo", "la vaca", "el conejo", "el delfín", "el oso", "el zorro", "el lobo", "el mono", "la cebra"] },
  { t: "vive en el mar", trueFor: ["el delfín"] }
];

for (let i = 0; i < 980; i++) {
  const anim = animalesLista[i % animalesLista.length];
  const tr = rasgosLista[Math.floor(Math.random() * rasgosLista.length)];
  const isTrue = tr.trueFor.includes(anim);
  preguntasAnimales.push({
    q: `¿Es cierto que ${anim} ${tr.t}?`,
    a: isTrue
  });
}