

const description = {
    demand: true, // Opcion obligatoria
    alias: 'd', // -
    desc: 'Descripcion de la tarea a realizar - unico'
}

const title = { 
    demand: true, // Opcion obligatoria
    alias: 't', // -
    desc: 'Titulo de la tarea a realizar - unico'
}

const completed = {
    alias: 'c',
    default: true, // Por default su valor es true
    desc: 'Marca como completada la tarea'
}
const erased = {
    alias: 'e',
    default: true, // Por default su valor es true
    desc: 'Borrar la tarea'
}

// Esta bandera sera obligatoria para el comando create.
const optionCreate = {
    description,
    title
}

const optionUpdate = {
    title,
    completed
}
const optionErase = {
    title,
    erased
}


module.exports = {
    optionCreate,
    optionUpdate,
    optionErase
}