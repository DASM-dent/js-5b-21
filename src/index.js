//Diana Amarfeline Santana Martinez 21 5toB

const saludar = (nombre) => {

    console.long('Creando etiqueta h1, en el HTML!');

    // Comentario de una sola linea
    // El codigo comentado no lee el interprete de JS.

    /*
        Comentario de varias lineas.
        Uno basico del DOCUMENTO OBJECT MODEL (DOM)
        permite a JS modificar el HTML.
    */

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}`;

    document.body.append(h1);
}

const user = "Juancho";

Saludar(user);