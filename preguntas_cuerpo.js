const preguntasCuerpo = [
  { q: "El corazón bombea sangre a todo nuestro cuerpo.", a: true },
  { q: "Los humanos tenemos 5 sentidos.", a: true },
  { q: "Los pulmones nos sirven para digerir los alimentos.", a: false },
  { q: "El esqueleto sostiene nuestro cuerpo y protege los órganos.", a: true },
  { q: "El sentido del gusto está en la boca y la lengua.", a: true },
  { q: "Los dientes de leche duran para toda la vida.", a: false },
  { q: "El estómago ayuda a procesar la comida que ingerimos.", a: true },
  { q: "El cerebro está protegido dentro del cráneo.", a: true },
  { q: "Lavarnos las manos ayuda a eliminar gérmenes y bacterias.", a: true },
  { q: "Los ojos nos permiten escuchar sonidos fuertes.", a: false },
  { q: "Las pestañas ayudan a proteger los ojos del polvo.", a: true },
  { q: "El esqueleto de un adulto tiene más de 200 huesos.", a: true },
  { q: "La piel es el órgano más grande de nuestro cuerpo.", a: true },
  { q: "Los músculos nos permiten movernos y correr.", a: true },
  { q: "Respiramos oxígeno y expulsamos dióxido de carbono.", a: true },
  { q: "El oído interno nos ayuda a mantener el equilibrio.", a: true },
  { q: "Beber agua es muy importante para mantenernos sanos.", a: true },
  { q: "Las uñas crecen en los dedos de las manos y pies.", a: true },
  { q: "La sangre transporta nutrientes y oxígeno a todo el cuerpo.", a: true },
  { q: "Dormir bien ayuda a que nuestro cuerpo recupere energía.", a: true }
];

const sentidosLista = [
  { sense: "la vista", organ: "los ojos", falseOrgan: "las orejas" },
  { sense: "el oído", organ: "las orejas", falseOrgan: "la nariz" },
  { sense: "el olfato", organ: "la nariz", falseOrgan: "los ojos" },
  { sense: "el gusto", organ: "la lengua", falseOrgan: "los pies" },
  { sense: "el tacto", organ: "la piel", falseOrgan: "los dientes" }
];

for (let i = 0; i < 980; i++) {
  const s = sentidosLista[i % sentidosLista.length];
  const isTrue = Math.random() > 0.5;
  const organUsed = isTrue ? s.organ : s.falseOrgan;
  preguntasCuerpo.push({
    q: `¿El sentido de ${s.sense} funciona principalmente a través de ${organUsed}?`,
    a: isTrue
  });
}