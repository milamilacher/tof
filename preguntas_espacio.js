const preguntasEspacio = [
  { q: "El Sol es una estrella muy brillante e inmensa.", a: true },
  { q: "La Tierra es el tercer planeta desde el Sol.", a: true },
  { q: "La Luna brilla porque produce su propia luz como un foco.", a: false },
  { q: "Los astronautas viajan al espacio en cohetes o naves espaciales.", a: true },
  { q: "El planeta Marte es conocido como el 'Planeta Rojo'.", a: true },
  { q: "Saturno es famoso por tener grandes anillos a su alrededor.", a: true },
  { q: "La fuerza de gravedad nos mantiene pegados al suelo.", a: true },
  { q: "En el espacio exterior hay aire para respirar normalmente.", a: false },
  { q: "El Sistema Solar tiene 8 planetas principales.", a: true },
  { q: "El Sol gira alrededor de la Tierra todos los días.", a: false },
  { q: "Un año en la Tierra tarda aproximadamente 365 días.", a: true },
  { q: "Júpiter es el planeta más grande de nuestro Sistema Solar.", a: true },
  { q: "Las estrellas se apagan completamente todas las mañanas.", a: false },
  { q: "Los cometas están hechos de hielo, polvo y rocas.", a: true },
  { q: "Los trajes espaciales protegen a los astronautas del frío extremo.", a: true },
  { q: "La Luna gira alrededor de nuestro planeta Tierra.", a: true },
  { q: "Un eclipse solar ocurre cuando la Luna se interpone entre el Sol y la Tierra.", a: true },
  { q: "El telescopio es un instrumento que sirve para mirar las estrellas lejanas.", a: true },
  { q: "Neptuno es un planeta muy helado y lejano al Sol.", a: true },
  { q: "En la Luna hay mucha gravedad y por eso es difícil saltar.", a: false }
];

const planetasLista = ["Mercurio", "Venus", "Tierra", "Marte", "Júpiter", "Saturno", "Urano", "Neptuno"];

for (let i = 0; i < 980; i++) {
  const p = planetasLista[i % planetasLista.length];
  const isTrue = Math.random() > 0.5;
  const qText = isTrue 
    ? `¿${p} forma parte de los planetas del Sistema Solar?` 
    : `¿Es cierto que ${p} es una luna que gira alrededor de la Tierra?`;
  preguntasEspacio.push({
    q: qText,
    a: isTrue
  });
}