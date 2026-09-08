// ─────────────────────────────────────────────────────────────
//  CONFIGURACIÓN — editá solo este archivo
// ─────────────────────────────────────────────────────────────
//
//  OJO al pegar de Firebase: la consola te da un bloque que empieza con
//  «import ...» y «const firebaseConfig = {». Eso NO va acá.
//  Copiá SOLO los valores de adentro de las llaves, como está abajo.

window.LUCY_CONFIG = {
  apiKey: "AIzaSyBiSG2r8y6tPPjGFHVb3l1Gagc8FaSMS84",
  authDomain: "lista-de-lucy.firebaseapp.com",
  databaseURL: "https://lista-de-lucy-default-rtdb.firebaseio.com",
  projectId: "lista-de-lucy",
  storageBucket: "lista-de-lucy.firebasestorage.app",
  messagingSenderId: "984774523133",
  appId: "1:984774523133:web:529d63ed51db067fe5e694"
};

// 2) Clave del panel de administración, guardada como hash.
//    Para cambiarla: ejecutá  python clave.py  y pegá acá la línea que imprime.
window.LUCY_ADMIN_HASH = "f0d69ab2780827518294cc4e218f0536af596d9346f05fa3e9b85cbda19d4907";

window.LUCY_TEXTS = {
  nombre: "Lucy",
  bajada: "Está en camino",
  intro: "Armamos esta lista para que nada se repita. Elegí un regalo, tocá «Lo llevo yo» y queda marcado como reservado, para que nadie más lo compre. Tu nombre no se publica.",
  fecha: ""   // opcional, ej: "Sábado 15 de noviembre"
};

window.LUCY_ALIAS = {
  mostrar: true,
  titulo: "¿No sabés qué regalarle a Lucy?",
  texto: "Podés elegir algo de esta lista, o ayudar con lo que puedas:",
  alias: "GeekyGothic3d",
  // Link de cobro de Mercado Pago (opcional). Se genera en la app:
  //   Cobrar  ->  Cobrar con un link  ->  Crear link
  // Queda con la forma  https://link.mercadopago.com.ar/algo
  // Si lo pegás acá, aparece un botón que abre Mercado Pago directamente.
  link: "https://link.mercadopago.com.ar/geekygothic3d",
  cierre: "Y si no estás en situación de regalar nada, no te preocupes: te esperamos igual."
};
