function mostrarElementos() {

    // Un array de objetos: cada elemento químico tiene 3 datos guardados juntos
    // (símbolo, nombre y número atómico)
    let elementos = [
        { simbolo: "O",  nombre: "Oxígeno",   numeroAtomico: 8,  categoria: "gas" },
        { simbolo: "C",  nombre: "Carbono",   numeroAtomico: 6,  categoria: "nometal" },
        { simbolo: "H",  nombre: "Hidrógeno", numeroAtomico: 1,  categoria: "gas" },
        { simbolo: "N",  nombre: "Nitrógeno", numeroAtomico: 7,  categoria: "gas" },
        { simbolo: "Fe", nombre: "Hierro",    numeroAtomico: 26, categoria: "metal" },
        { simbolo: "Au", nombre: "Oro",       numeroAtomico: 79, categoria: "metal" }
    ];

    // Leemos qué categoría eligió el usuario en el <select>
    let categoriaElegida = document.getElementById("categoria").value;

    // Buscamos el div donde vamos a mostrar el resultado
    let resultado = document.getElementById("resultado");

    // Lo limpiamos primero, por si el botón se presiona más de una vez
    resultado.innerHTML = "";

    // Ciclo for: recorre el array desde la posición 0 hasta la última.
    // "elementos.length" cuenta automáticamente cuántos elementos hay (aquí 6).
    for (let i = 0; i < elementos.length; i++) {

        // Guardamos el elemento actual en una variable para no repetir "elementos[i]" muchas veces
        let actual = elementos[i];

        // Si el usuario eligió una categoría específica y este elemento no es de esa categoría,
        // saltamos a la siguiente vuelta del ciclo sin mostrar nada (continue = "sigue con el siguiente")
        if (categoriaElegida !== "todos" && actual.categoria !== categoriaElegida) {
            continue;
        }

        // Armamos el texto que vamos a mostrar, accediendo a cada dato con un punto (.)
        let texto = actual.simbolo + " - " + actual.nombre + " (numero atomico: " + actual.numeroAtomico + ")";

        // alert() muestra una ventana emergente con los datos del elemento actual
        alert(texto);

        // document.write() escribe directamente en el documento HTML completo
        document.write(texto + "<br>");

        // innerHTML agrega el mismo texto dentro del div, sin usar document.write
        resultado.innerHTML = resultado.innerHTML + texto + "<br>";
    }
    alert("Estos son los principales elementos químicos que componen la materia y la vida.");
}