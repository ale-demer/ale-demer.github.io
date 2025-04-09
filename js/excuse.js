// Elementos del DOM
const parrafoExcusa = document.getElementById('excusa');
const botonGenerar = document.getElementById('boton-generar');

// --- Listas de partes para construir las excusas ---
// Puedes agregar muchísimas más opciones a cada lista

const intros = [
    "No pude hacerlo porque",
    "Llegué tarde ya que",
    "Se me complicó porque",
    "Resulta que",
    "Vas a pensar que es mentira, pero",
    "Te juro que",
    "Mi problema fue que",
];

const sujetos = [
    "mi perro",
    "un gremlin invisible",
    "el vecino del quinto",
    "Marley",
    "mi yo del futuro",
    "el algoritmo de Instagram",
    "un grupo de palomas mensajeras",
    "Ricardinho",
    "mi tostadora",
    "Peri"
];

const verbos = [
    "se comió",
    "escondió",
    "formateó",
    "le tiró café encima a",
    "abdujo",
    "puso en un bucle temporal",
    "rompió",
    "hackeó",
    "desconfiguró",
];

const objetos = [
    "mi tarea",
    "las llaves del auto",
    "el informe",
    "el server de dev",
    "mi despertador",
    "el último paquete de yerba",
    "la contraseña maestra",
    "mi celular",
];

// --- Función para obtener un elemento aleatorio de un array ---
function obtenerElementoAleatorio(lista) {
    // Genera un índice aleatorio dentro del rango de la lista
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    // Devuelve el elemento en ese índice
    return lista[indiceAleatorio];
}

// --- Función para generar y mostrar la excusa ---
function generarExcusa() {
    // Selecciona una parte aleatoria de cada lista
    const intro = obtenerElementoAleatorio(intros);
    const sujeto = obtenerElementoAleatorio(sujetos);
    const verbo = obtenerElementoAleatorio(verbos);
    const objeto = obtenerElementoAleatorio(objetos);

    // Une las partes para formar la excusa completa
    const excusaCompleta = `${intro} ${sujeto} ${verbo} ${objeto}`;

    // Muestra la excusa en el párrafo correspondiente
    parrafoExcusa.textContent = excusaCompleta;
}

// --- Event Listener ---
// Cuando se hace clic en el botón, se llama a la función generarExcusa
botonGenerar.addEventListener('click', generarExcusa);

// --- Generar una excusa inicial al cargar la página ---
// Para que no aparezca el texto inicial "Presiona el botón..." después de la primera carga
generarExcusa();